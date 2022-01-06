const createError = require('http-errors'); 
const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String }, 
  emailAddress: {type: String }, 
  password: {type: String }  
}); 

const User = mongoose.model('user', userSchema); 

exports.User = User;
exports.userSchema = userSchema;