const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hackathon';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Participant Schema
const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  teamName: String,
  teamMembers: String,
});

const Participant = mongoose.model('Participant', participantSchema);

// API routes
app.post('/api/register', async (req, res) => {
  const { name, email, teamName, teamMembers } = req.body;

  const newParticipant = new Participant({
    name,
    email,
    teamName,
    teamMembers,
  });

  try {
    await newParticipant.save();
    res.status(201).send('Participant registered successfully!');
  } catch (err) {
    console.error('Error saving participant:', err);
    res.status(400).send('Error registering participant.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
