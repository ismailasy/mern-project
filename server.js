const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');

//importtion des routes
const userRoutes = require('./routes/userRoutes');

// Set up middleware
app.use(bodyParser.json());
app.use(cors());
 
// Register the routes
app.use('/api/users', userRoutes);


// Connect to MongoDB
mongoose.connect('mongodb://localhost/mernstack', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
