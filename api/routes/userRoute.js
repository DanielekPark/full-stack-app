const { User } = require("../models/userModel");
const mongoose = require("mongoose");
const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const authentication = require("../middleware/authentication");
const CryptoJS = require("crypto-js"); 
//const auth = require('../middleware/auth');
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");


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

    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt); 
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
