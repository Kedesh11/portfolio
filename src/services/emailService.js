import emailjs from '@emailjs/browser';

// Configuration EmailJS avec variables d'environnement
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Service pour l'envoi d'emails via EmailJS
 */
export const emailService = {
  /**
   * Envoie un email de contact
   * @param {Object} formData - Données du formulaire
   * @param {string} formData.user_name - Nom de l'utilisateur
   * @param {string} formData.user_phone - Téléphone de l'utilisateur
   * @param {string} formData.user_email - Email de l'utilisateur
   * @param {string} formData.subject - Sujet du message
   * @param {string} formData.message - Message
   * @returns {Promise<Object>} - Résultat de l'envoi
   */
  async sendContactEmail(formData) {
    try {
      // Vérifier si les clés sont configurées
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        return {
          success: false,
          message: 'Configuration EmailJS manquante. Veuillez configurer les clés dans le fichier .env',
          error: 'Missing configuration'
        };
      }

      const templateParams = {
        from_name: formData.user_name,
        from_phone: formData.user_phone,
        from_email: formData.user_email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sevankedesh11@gmail.com', // Votre email de réception
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      return {
        success: true,
        message: 'Email envoyé avec succès!',
        result: result
      };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
        error: error
      };
    }
  }
};

export default emailService;
