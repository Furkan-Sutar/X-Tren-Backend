const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB URI is not defined in the environment variables');
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
      socketTimeoutMS: 45000, // Timeout for socket operations
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Optionally handle error here, e.g., throw error to stop application initialization
    throw error;
  }
};

module.exports = connectDB;