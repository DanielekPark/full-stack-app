const createError = require('http-errors'); 
const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
  firstName: {
    type: String, 
    required: true,
    minLength: 3, 
  },
  lastName: {
    type: String, 
    required: true,
    minLength: 3, 
  }, 
  emailAddress: {
    type: String, 
    required: true,
    minLength: 5, 
  }, 
  password: {
    type: String, 
    required: true,
    minLength: 7,
  },  
}); 

const User = mongoose.model('user', userSchema); 

exports.User = User;
exports.userSchema = userSchema;