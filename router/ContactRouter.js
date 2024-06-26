const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

router.post('/contact', async (req, res) => {
  try {
    const { username, email, message } = req.body;
                                                  
    const form = new ContactForm({
      username,
      email,
      message,
    });

const saveData = await form.save()    
    console.log('saveData', saveData);
    res.status(201).json({
      message: 'Contact form submitted successfully',
      error: false,
      success: true,
      data: saveData,
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
