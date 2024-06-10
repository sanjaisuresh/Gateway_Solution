const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const applicationController = require('./controllers/applicationController');
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

// Routes
app.post('/apply', applicationController.createApplication);
app.get('/applications', applicationController.getApplications); // New route to fetch applications

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
