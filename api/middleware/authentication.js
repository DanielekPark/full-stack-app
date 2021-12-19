const bcrypt = require("bcrypt");
const { User } = require("../models/userModel");
const auth = require("basic-auth"); 
const mongoose = require("mongoose"); 
const http = require("http"); 

module.exports = async (req, res, next) => {
  //authenticate routes for
  // GET /api/users
  // POST /api/courses
  // PUT /api/coures/:id
  // DELETE /api/courses/:id

  //enter username and password IN THUNDERCAT
  //use an authorization header
  //https://www.geeksforgeeks.org/basic-authentication-in-node-js-using-http-header/
  //2. 
  //Pass a request object to the module export. 
  //If parsing fails undefined is returned, otherwise an object with .name & .pass.
  // => { name: 'something', pass: 'whatever' }

  //3. if true 
  //find the user using the email use model
  //compare the passwords use bcrypt

  const headers = req.headers.authorization;
  const authHeader = atob(headers)
  console.log(authHeader)

  // const credentials = auth(req);
  // if(credentials){
  //   console.log(credentials, 'credentials'); 
  //   next(); 
  // }else {
  //   console.log(credentials, 'failed'); 
  //   next(); 
  // }

  // if(credentials) {
     // const user = await User.findOne({emailAddress: credentials}); 
     // const validPassword = await bcrypt.compare(user.password);
  // }
  
}

  //https://www.npmjs.com/package/basic-auth
  //https://github.com/kyleines/Full-Stack-React-App-with-a-Rest-API
  //https://github.com/cwinters8/Full-Stack-App