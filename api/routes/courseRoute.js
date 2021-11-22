const {Course} = require('../models/courseModel'); 
//const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {User} = require('../models/userModel'); 
const createError = require('http-errors'); 

// api/courses
//GET
router.get('/', async (req, res) => {
  const courses = await Course
    .find()
    .sort('title')
    .select('user title description estimatedTime materialsNeeded');
  res.send(courses); 
});

router.get('/:id', async (req, res) => {
  //returns a course; including the user that owns the course for the provided course id
  const course = await Course.findById(req.params.id);
  
  res.send(course); 
});

//POST
router.post('/', async (req, res, next) => {
  //None of the current users will have a match ID?
  try {
    let course = new Course({
      user: req.body._id,
      title: req.body.title,
      description: req.body.description,
      estimatedTime: req.body.estimatedTime,
      materialsNeeded: req.body.materialsNeeded
    });
    course = await course.save(); 
  }catch (err) {
    next(createError(400, `there was a problem with ${err}`));
  }
  //set location header "/"
  res.location(`/`);
  return res.send({}); 
});

//PUT
router.put('/:id', async (req, res, next) => {
  //VALIDATION
  
  try {
    let course = await Course.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      materialsNeeded: req.body.materialsNeeded    
    }, {new: true, runValidators: true}); 

  }catch (err) {
    return next(createError(400, `PLEASE FILL OUT REQUIRED INFORMATION ${err} OR CHECK THE ID`));
  }
  res.send({}); 
});  

//DELETE
router.delete('/:id', async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id); 
  res.send({}); 
});  

module.exports = router; 