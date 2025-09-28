# Configuration EmailJS pour le Portfolio

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

### 2. Configurer le service email
1. Dans le dashboard, allez dans "Email Services"
2. Ajoutez un nouveau service (Gmail, Outlook, etc.)
3. Suivez les instructions pour connecter votre email `sevankedesh11@gmail.com`
4. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Créez un nouveau template avec l'ID `template_contact`
3. Utilisez ce template :

```
Sujet: Nouveau message de contact - {{subject}}

Bonjour Sevan,

Vous avez reçu un nouveau message de contact :

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à jour la configuration
Modifiez le fichier `src/services/emailService.js` :

```javascript
const EMAILJS_SERVICE_ID = 'votre_service_id_ici';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'votre_cle_publique_ici';
```

### 6. Tester le formulaire
1. Lancez l'application : `npm start`
2. Remplissez le formulaire de contact
3. Vérifiez que l'email arrive dans votre boîte de réception

## Fonctionnalités ajoutées

- ✅ Envoi d'emails fonctionnel via EmailJS
- ✅ Validation des champs préservée
- ✅ Messages d'erreur et de succès
- ✅ État de chargement pendant l'envoi
- ✅ Désactivation des champs pendant l'envoi
- ✅ Gestion d'erreurs robuste
- ✅ Code existant préservé

## Sécurité

- Les clés EmailJS sont publiques par design
- EmailJS gère la sécurité côté serveur
- Aucune donnée sensible n'est exposée
- Limite de 200 emails/mois en version gratuite
