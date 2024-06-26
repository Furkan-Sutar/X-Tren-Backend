// index.js
const  bodyParser =require('body-parser')
const express = require('express')
const dotenv = require('dotenv')
const mongooseConnect = require('./db.js') // Corrected import path
const ContactRouter = require('./router/ContactRouter.js')
const cors = require('cors');

const PORT = process.env.PORT || 3000
dotenv.config()
const app = express();
const corsOptions = {
  origin: process.env.FRONTED_URL || ' http://localhost:5173', // Allow only this origin
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongooseConnect();

app.use(express.json())

// Routes
app.use('/api', ContactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
