const { User } = require("../models/userModel");
const mongoose = require("mongoose");
const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const authentication = require("../middleware/authentication");
const CryptoJS = require("crypto-js"); 

//ENDPOINT/api/users 200
//GET
router.get("/", authentication, async (req, res) => {
  const users = await User.find().sort('firstName');
  res.send(users);
});

//POST
router.post("/", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.emailAddress });
    if (!user) return res.status(400).send("User already registered.");

    user = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password:req.body.password
    });
    user.password =  CryptoJS.AES.encrypt(user.password, user.password).toString(); 
    await user.save();

    const data = {
      _id: user._id, 
      firstName: user.firstName, 
      lastName: user.lastName, 
      emailAddress: user.emailAddress
    }
    
    res
      .location("/")
      .send(data);
  } catch (err) {
    console.log('There is a problem with the route'); 
    next(createError(400, `there was a problem with ${err}`));
  }

});

module.exports = router;
