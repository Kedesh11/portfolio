#!/usr/bin/env bash
set -euo pipefail

# Deploy Dockerized CRA (Nginx) to Azure App Service using ACR
#
# Prerequisites:
# - Azure CLI (az), Docker, and logged-in Azure CLI context (az login)
# - Existing Resource Group and Web App (Linux) created
# - Existing Azure Container Registry (ACR) (or create one beforehand)
#
# Usage examples:
#   ./scripts/deploy-azure.sh \
#     --resource-group portfolio-sevan \
#     --webapp-name sevan \
#     --acr-name portfoliosevanacr \
#     --image-name portfolio \
#     --dockerfile web/portfolio/portfolio/Dockerfile \
#     --context web/portfolio/portfolio \
#     --tag $(git rev-parse --short HEAD)
#
# Notes:
# - This script sets WEBSITES_PORT=80 for Nginx based image.
# - It uses the new container flags for az webapp config container set.
# - If you want to switch to Managed Identity for ACR pulls, this script can be adapted.

RESOURCE_GROUP=""
WEBAPP_NAME=""
ACR_NAME=""
IMAGE_NAME="portfolio"
DOCKERFILE_PATH="web/portfolio/portfolio/Dockerfile"
BUILD_CONTEXT="web/portfolio/portfolio"
IMAGE_TAG=""
SUBSCRIPTION_ID=""
PORT="80"

usage() {
  cat <<EOF
Usage: $0 --resource-group RG --webapp-name APP --acr-name ACR [options]

Required:
  --resource-group    Azure Resource Group name
  --webapp-name       Azure App Service (Linux) name
  --acr-name          Azure Container Registry name (e.g., myacr)

Optional:
  --image-name        Image repository name (default: portfolio)
  --dockerfile        Dockerfile path (default: web/portfolio/portfolio/Dockerfile)
  --context           Docker build context (default: web/portfolio/portfolio)
  --tag               Image tag to push and deploy (default: git short SHA or timestamp)
  --subscription      Azure subscription ID or name (optional)
  --port              Container port (default: 80)

Examples:
  $0 --resource-group rg --webapp-name app --acr-name myacr \\
     --tag $(git rev-parse --short HEAD)
EOF
}

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    --resource-group)
      RESOURCE_GROUP="$2"; shift 2;;
    --webapp-name)
      WEBAPP_NAME="$2"; shift 2;;
    --acr-name)
      ACR_NAME="$2"; shift 2;;
    --image-name)
      IMAGE_NAME="$2"; shift 2;;
    --dockerfile)
      DOCKERFILE_PATH="$2"; shift 2;;
    --context)
      BUILD_CONTEXT="$2"; shift 2;;
    --tag)
      IMAGE_TAG="$2"; shift 2;;
    --subscription)
      SUBSCRIPTION_ID="$2"; shift 2;;
    --port)
      PORT="$2"; shift 2;;
    -h|--help)
      usage; exit 0;;
    *)
      echo "Unknown option: $1" >&2; usage; exit 1;;
  esac
done

# Validate required
if [[ -z "$RESOURCE_GROUP" || -z "$WEBAPP_NAME" || -z "$ACR_NAME" ]]; then
  echo "Error: --resource-group, --webapp-name, and --acr-name are required." >&2
  usage; exit 1
fi

# Tools check
command -v az >/dev/null 2>&1 || { echo "Error: az (Azure CLI) is not installed." >&2; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "Error: docker is not installed or not in PATH." >&2; exit 1; }

# Subscription context (optional)
if [[ -n "$SUBSCRIPTION_ID" ]]; then
  echo "Setting subscription: $SUBSCRIPTION_ID"
  az account set --subscription "$SUBSCRIPTION_ID"
fi

# Determine tag
if [[ -z "$IMAGE_TAG" ]]; then
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    IMAGE_TAG=$(git rev-parse --short HEAD)
  else
    IMAGE_TAG=$(date +%Y%m%d%H%M%S)
  fi
fi

# Resolve ACR login server
ACR_LOGIN_SERVER=$(az acr show -n "$ACR_NAME" --query loginServer -o tsv)
if [[ -z "$ACR_LOGIN_SERVER" ]]; then
  echo "Error: Could not resolve ACR login server for $ACR_NAME" >&2
  exit 1
fi

echo "ACR login server: $ACR_LOGIN_SERVER"
echo "Building image: $ACR_LOGIN_SERVER/$IMAGE_NAME:$IMAGE_TAG (and latest)"

# Build image (multi-tag: commit and latest)
docker build -f "$DOCKERFILE_PATH" -t "$ACR_LOGIN_SERVER/$IMAGE_NAME:$IMAGE_TAG" -t "$ACR_LOGIN_SERVER/$IMAGE_NAME:latest" "$BUILD_CONTEXT"

# Login to ACR and push
az acr login -n "$ACR_NAME"
docker push "$ACR_LOGIN_SERVER/$IMAGE_NAME:$IMAGE_TAG"
docker push "$ACR_LOGIN_SERVER/$IMAGE_NAME:latest"

# Configure App Service to use the new image tag (modern flags)
az webapp config container set \
  -n "$WEBAPP_NAME" \
  -g "$RESOURCE_GROUP" \
  --container-image-name "$ACR_LOGIN_SERVER/$IMAGE_NAME:$IMAGE_TAG" \
  --container-registry-url "https://$ACR_LOGIN_SERVER"

# Ensure WEBSITES_PORT is set (Nginx default in your Dockerfile)
az webapp config appsettings set \
  -n "$WEBAPP_NAME" \
  -g "$RESOURCE_GROUP" \
  --settings WEBSITES_PORT="$PORT"

# Restart app
az webapp restart -n "$WEBAPP_NAME" -g "$RESOURCE_GROUP"

# Output URL
APP_URL=$(az webapp show -n "$WEBAPP_NAME" -g "$RESOURCE_GROUP" --query defaultHostName -o tsv)
echo "Deployed successfully: https://$APP_URL"
