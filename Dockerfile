# Utilise une image officielle Node.js comme image de base
FROM node:20-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install --legacy-peer-deps

# Copie tout le code source dans le conteneur
COPY . .

# Construit l'application
RUN npm run build

# Utilise une image nginx pour servir le build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
