const mongoose = require('mongoose');

const openingSchema = new mongoose.Schema({
    position: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  });
  

module.exports = mongoose.model('Opening', openingSchema);
