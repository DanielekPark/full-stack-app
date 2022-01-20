const { User } = require("../models/userModel");
const auth = require("basic-auth"); 
const createError = require('http-errors'); 
const CryptoJS = require("crypto-js"); 
const sha256 = require('crypto-js/sha256'); 
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose"); 
//https://www.npmjs.com/package/http-errors
module.exports = async (req, res, next) => {
  const header = req.headers.authorization;
  //https://www.npmjs.com/package/crypto-js
  //https://www.geeksforgeeks.org/what-is-crypto-module-in-node-js-and-how-it-is-used/ 
  //DECRYPT USING CRYPTO-JS; TRY USING OBJECT ENCRYPTION
  
  const cred = header.split(' ').slice(1); 
  const bytes  = CryptoJS.AES.decrypt(cred[0], cred[1]);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log(decryptedData);
  const user = await User.findOne({emailAddress: decryptedData[0].email}); 

  if(user){
    //if they passwords dont match throw an error
    //  USE CRYPTO to decrypt password from database    
    const password = decryptedData[1].key; 

    if(password === user.password){
      console.log('authenticated')
      next(); 
    }else {
      next(createError(400, `password doesn't match`));
    }

  }else {
    next(createError(400, `user not found`));
  }
}

  // const userInfo = await JSON.parse(cred[1]);
  // const userEmail = Object.keys(userInfo).join('');//converts array to string
  // const bytes  = CryptoJS.AES.decrypt(header, 'secret key 123');  

  //pg 5 need 400 status codes
  //need validation for creating a new user firstname, lastName, emailAddres, password; 
  // validate inputs; 
  //ROUTES need validation for creating a new course title & description; 
  //encrypted in the database and decrypted when coming back
  
  //encrypt data when signing up
  //decrypt data from database when signing and comparing passwords