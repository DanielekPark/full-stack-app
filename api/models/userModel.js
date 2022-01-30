const createError = require('http-errors'); 
const mongoose = require('mongoose'); 

// const userSchema = new mongoose.Schema({
//   firstName: {type: String},
//   lastName: {type: String }, 
//   emailAddress: {type: String }, 
//   password: {type: String }  
// }); 
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
    required: true,
    minLength: 5, 
    maxLength: 50
  }, 
  password: {
    type: String, 
    required: true, 
    minLength: 7,
    maxlength: 50
  },  
}); 
const User = mongoose.model('user', userSchema); 

exports.User = User;
exports.userSchema = userSchema;

/*

*/ 