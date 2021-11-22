const mongoose = require('mongoose'); 
const { User } = require("./userModel");

const courseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String, 
    required: true, 
    }, 
  description: {
    type: String, 
    required: true,
    },
  estimatedTime: {
    type: String,
    required: true, 
    },
  materialsNeeded: {
    type: String,
    required: true,
    }
}); 

const Course = mongoose.model('course', courseSchema); 
exports.Course = Course; 