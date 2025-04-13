const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  consultationType: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

const Consultation = mongoose.model('Consultation', consultationSchema);
module.exports = Consultation;
