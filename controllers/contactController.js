const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

const contactUs = async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });
  try {
    await newContact.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hello ${name},\n\nThank you for reaching out. We have received your message: "${message}". We will get back to you soon.\n\nBest regards,\nLawyer's Office`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Message received and email sent' });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error submitting contact form' });
  }
};

module.exports = { contactUs };
