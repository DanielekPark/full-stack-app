const mongoose = require('mongoose'); 
const { User } = require("./userModel");

const courseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  title: {
    type: String, 
    required: true, 
    minLength: 5,
    maxLength: 75
    }, 
  description: {
    type: String, 
    required: true,
    minLength: 5,
    },
  estimatedTime: {
    type: String,
    minLength: 5,
    required: true, 
    },
  materialsNeeded: {
    type: String,
    required: true,
    }
}); 

const Course = mongoose.model('course', courseSchema); 
exports.Course = Course; 