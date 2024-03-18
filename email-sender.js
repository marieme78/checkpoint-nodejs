const nodemailer = require('nodemailer');

// Paramètres de connexion au service de messagerie
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aidaramarieme2@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'momo' // Remplacez par votre mot de passe
  }
});
// Options de l'e-mail
const mailOptions = {
  from: 'aidaramarieme2@gmail.com', // L'adresse e-mail
  to: 'recipient-email@example.com', // L'adresse e-mail du destinataire
  subject: 'Test Email',
  text: 'Ceci est un e-mail de test envoyé depuis Node.js.'
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
  } else {
    console.log('E-mail envoyé avec succès :', info.response);
  }
});
