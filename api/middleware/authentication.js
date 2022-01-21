const { User } = require("../models/userModel");
const auth = require("basic-auth"); 
const createError = require('http-errors'); 
const CryptoJS = require("crypto-js"); 
//https://www.npmjs.com/package/http-errors
const sha256 = require('crypto-js/sha256'); 
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose"); 

module.exports = async (req, res, next) => {
  const header = req.headers.authorization;
  //https://www.npmjs.com/package/crypto-js
  //https://www.geeksforgeeks.org/what-is-crypto-module-in-node-js-and-how-it-is-used/   
  const cred = header.split(' ').slice(1); 
  const bytes = CryptoJS.AES.decrypt(cred[0], cred[1]);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //console.log(decryptedData)
  const user = await User.findOne({emailAddress: decryptedData[0].email}); 

  if(user){    
    //DECRYPTED USER PASSWORD FROM SIGNIN    
    const signInPass = decryptedData[1].key; 
    // USE CRYPTO to decrypt password from database
    const decryptPass = CryptoJS.AES.decrypt(user.password, signInPass);
    const userPass = decryptPass.toString(CryptoJS.enc.Utf8);
    console.log(userPass)
    if(signInPass === userPass){
      console.log('authenticated'); 
      next(); 
    }else {
      next(createError(400, `password doesn't match`));
    }

  }else {
    next(createError(400, `user not found`));
  }
}
  //pg 5 hash password of user signup

  //pg 5 need 400 status codes
  //MODELS/SCHEMA USER 
  //need validation for creating a new user firstname, lastName, emailAddress, password; 
  

  //PG5 NEED 400 STATUS CODE
  //MODELS/SCHEMA COURSES
  //ROUTES need validation for creating a new course title & description


  //PG 6
  //AUTHENTICATE ROUTES FOR; NEEDS 401 CODE
  //POST /api/courses/
  //PUT /api/courses/:id
  //DELETE /api/courses/:id


  //PG 6
  //POST ROUTE USER
  //USE CRYPTO-JS for userSignUp 
  //encrypt data (in the database) when signing up 


  //PG 6
  //decrypt in authentication middleware
  //decrypt data from database when signing in then compare passwords


  //pg10
  //privateRoute 
  //use authentication middleware for routes:
  //  /course/create
  //  /course/:id/update