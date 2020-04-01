const sgMail = require('@sendgrid/mail');
const htmlToText = require('html-to-text');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const html = require('./emailTemplate/paymentTemplate');

const message = {
  from: 'no-reply@medanstore.co',
  subject: 'Your MEDANSTORE.CO Order',
  text: htmlToText.fromString(html),
  html
};

module.exports = async recipientEmail => {
  message.to = recipientEmail;

  try {
    await sgMail.send(message);
  } catch (error) {
    console.log(error);
  }
};
