
const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

router.post('/contact', async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Find and update the document if email and username exist, otherwise create a new one
    const form = await ContactForm.findOneAndUpdate(
      { email, username },
      { message, date: Date.now() },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(201).json({
      message: 'Contact form submitted successfully',
      error: false,
      success: true,
      data: form,
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({
      message: 'Something went wrong',
      error: true,
      success: false,
    });
  }
});

module.exports = router;
