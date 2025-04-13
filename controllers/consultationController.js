const Consultation = require('../models/consultation');

const bookConsultation = async (req, res) => {
  const { name, email, phone, consultationType, date } = req.body;

  const newConsultation = new Consultation({ name, email, phone, consultationType, date });

  try {
    await newConsultation.save();
    return res.status(200).json({ message: 'Consultation booked successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error booking consultation' });
  }
};

module.exports = { bookConsultation };
