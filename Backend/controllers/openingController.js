const Opening = require('../models/Opening');

// Create a new job opening
exports.createOpening = async (req, res) => {
  try {
    const { position, description, location } = req.body;
    const opening = new Opening({ position, description, location });
    await opening.save();
    res.status(201).json({ message: 'Job opening created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job opening' });
  }
};

// Fetch all job openings
exports.getOpenings = async (req, res) => {
  try {
    const openings = await Opening.find();
    res.status(200).json(openings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job openings' });
  }
};

exports.deleteOpening = async (req, res) => {
    try {
      const { id } = req.params;
      await Opening.findByIdAndDelete(id);
      res.status(200).json({ message: 'Job opening deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };