const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactForm = mongoose.model("ContactForm", ContactFormSchema);

module.exports = ContactForm;
