const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    min: 1,
    max: 12 // Assuming classes range from 1 to 12
  },
  option: {
    type: String,
    required: true,
    enum: ['A', 'B'] // Ensures the option is either 'A' or 'B'
  }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
