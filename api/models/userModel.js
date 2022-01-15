const createError = require('http-errors'); 
const mongoose = require('mongoose'); 
const validator = require('validator'); 

const userSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String }, 
  emailAddress: {type: String }, 
  password: {type: String }  
}); 

const User = mongoose.model('user', userSchema); 

exports.User = User;
exports.userSchema = userSchema;

/*
const userSchema = new mongoose.Schema({
  firstName: {
    type: String, 
    required: true, 
    minLength: 3, 
    maxLength: 50
  },
  lastName: {
    type: String, 
    required: true, 
    minLength: 3, 
    maxLength: 50
  }, 
  emailAddress: {
    type: String, 
    required: [true, 'Please provide an email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email', 
    },
    unique: true, 
    minLength: 5, 
    maxLength: 50
  }, 
  password: {
    type: String, 
    required: [true, 'Please provide a password'],
    required: true, 
    minLength: 8,
    maxlength: 20
  },  
}); 
*/ 