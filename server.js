const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Routes
app.use('/api', contactRoutes);
app.use('/api', consultationRoutes);
app.use('/api', serviceRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log('Error connecting to MongoDB:', err));
