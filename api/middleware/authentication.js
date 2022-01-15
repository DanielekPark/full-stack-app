const bcrypt = require("bcryptjs");
const { User } = require("../models/userModel");
const auth = require("basic-auth"); 
const mongoose = require("mongoose"); 
const createError = require('http-errors'); 

module.exports = async (req, res, next) => {
  const headers = req.headers.authorization;
  console.log(headers)
  //throw an error if credentials DON'T MATCH
  //https://www.npmjs.com/package/http-errors

  //use email to look for users for the query
  // const user = await User.findOne({emailAddress: headers})

  // if(!user){
  //   return await next(createError(404, 'Error email or password'));
  // } else {
  //if email is found use bcrypt to compare password
  //   const validPass = await bcrypt.compare(user.password, userPass); 
  //   console.log(userEmail, userPass)
  //   if(!validPass) return res.status(400).send('Invalid email or password'); 
  //   next(); 
  // } 

  //set status 404 for GET courseRoute if a specific course is not retrieved
  //set the location header for POST courseRoute to the URL
}

  //pg 5 need 400 status codes
  //need validation for creating a new user firstname, lastName, emailAddres, password; need to validate inputs; ROUTES
  //need validation for creating a new course title & description; ROUTES
  
  //1. encrypt password
  //2. use bcrypt to compare login password and database password


  /*
  https://github.com/cwinters8/Full-Stack-App/blob/master/client/src/Components/UserSignIn.js
  https://github.com/cwinters8/Full-Stack-App/blob/master/api/routes.js
  */ 