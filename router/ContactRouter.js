const express = require("express");

const router = express.Router();
const ContactForm = require("../models/ContactForm");
router.post("/contact", async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const form = new ContactForm({
      username,
      email,
      message,
    });

    const saveData = await form.save();
    console.log("saveData", saveData);
    res.json({
      message: "updated",
      error: false,
      success: true,
      data: saveData,
    });
  } catch (error) {
    res.json({
      message: "some thing wrong",
      error: true,
      success: false,
    });
  }
});

module.exports = router;
