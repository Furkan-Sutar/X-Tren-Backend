const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongooseConnect = require('./db.js');
const ContactRouter = require('./router/ContactRouter.js');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongooseConnect();

app.use(express.json());

// Routes
app.use('/api', ContactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
