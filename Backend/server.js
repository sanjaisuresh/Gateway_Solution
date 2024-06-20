// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const applicationController = require('./controllers/applicationController');
const openingController = require('./controllers/openingController'); // Import opening controller
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes for applications
app.post('/apply', applicationController.createApplication);
app.get('/applications', applicationController.getApplications);

// Routes for job openings
app.post('/openings', openingController.createOpening);
app.get('/openings', openingController.getOpenings);
app.delete('/openings/:id', openingController.deleteOpening); // Add this route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
