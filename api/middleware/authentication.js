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
  const user = await User.findOne({emailAddress: decryptedData[0].email}); 

  if(user){    
    //DECRYPTED USER PASSWORD FROM SIGNIN    
    const signInPass = decryptedData[1].key; 
    const cipherText = CryptoJS.AES.decrypt(user.password, cred[1]);
    const userPass = cipherText.toString(CryptoJS.enc.Utf8);
    if(signInPass === userPass){
      next(); 
    }else {
      next(createError(400, `password doesn't match`));
    }

  }else {
    next(createError(400, `user not found`));
  }
}
  //pg 5 need 400 status codes
  //MODELS/SCHEMA USER 
  //need validation for creating a new user firstname, lastName, emailAddress, password; 
  //PG5 NEED 400 STATUS CODE
  //MODELS/SCHEMA COURSES
  //ROUTES need validation for creating a new course title & description
  //PG 6/6
  //AUTHENTICATE ROUTES FOR; NEEDS 401 CODE
  //POST /api/courses/
  //PUT /api/courses/:id
  //DELETE /api/courses/:id


  //pg10
  //privateRoute 
  //use authentication middleware for routes:
  //  /course/create
  //  /course/:id/update

  //pg 11
  //user id matches owner that owns the course
  //server stops when there's an error