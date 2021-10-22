const cors = require('cors');
const config = require('config'); 
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken'); 
const app = express();
const users = require('./routes/userRoute'); 
const courses = require('./routes/courseRoute'); 

mongoose.connect('mongodb://localhost:27017/fsa-restapi')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors());
app.use(express.json());  
app.use('/api/users', users); 
app.use('/api/courses', courses); 
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
