const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'contactusdata' } // Explicit collection name
);

module.exports = mongoose.model('ContactUs', contactUsSchema);
