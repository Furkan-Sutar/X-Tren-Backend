const  mongoose =require ('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const mongooseConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Use your MongoDB URI from environment variables
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    await mongoose.connect(uri,);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Event listeners for connection status
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = mongooseConnect;
