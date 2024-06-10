const Application = require('../models/Application');

// Create a new application
exports.createApplication = async (req, res) => {
  try {
    const { fullName, experience, interestedRole, dob, address, position } = req.body;
    const application = new Application({ fullName, experience, interestedRole, dob, address, position });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
};

// Fetch all applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};
