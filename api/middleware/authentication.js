const bcrypt = require("bcryptjs");
const { User } = require("../models/userModel");
const auth = require("basic-auth"); 
const mongoose = require("mongoose"); 
const createError = require('http-errors'); 

module.exports = async (req, res, next) => {
  const header = req.headers.authorization;
  const cred = await header.split(' ');
  const objct = await JSON.parse(cred[1]);
  const userEmail = Object.keys(objct).join('');
  const user = await User.findOne({emailAddress: userEmail}); 
  if(user){
    const password = objct[userEmail]; 
    //if they passwords do not match throw an error
    if(password === user.password){
      next(); 
    }else {
      next(createError(400, `error line 18`));
    }

  }else {
    next(createError(400, `error line 23`));
  }
  //https://www.npmjs.com/package/http-errors

  //set status 404 for GET courseRoute if a specific course is not retrieved
  //set the location header for POST courseRoute to the URL
}

  //pg 5 need 400 status codes
  //need validation for creating a new user firstname, lastName, emailAddres, password; need to validate inputs; ROUTES
  //need validation for creating a new course title & description; ROUTES
  //1. encrypt password
  //2. use bcrypt to compare login password and database password
  /*
  https://www.npmjs.com/package/simple-crypto-js
  https://www.npmjs.com/package/base-64
  */