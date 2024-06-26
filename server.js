const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your React development server
const corsOptions = {
    origin: 'http://localhost:5175', // Update with your React development server URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  

app.use(cors(corsOptions));

// Other middleware and routes setup
// Replace this with your actual API routes for MySQL interactions

app.listen(YourPortNumber, () => {
  console.log(`Server is running on port ${YourPortNumber}`);
});
