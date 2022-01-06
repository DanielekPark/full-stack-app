const mongoose = require('mongoose'); 
const { User } = require("./userModel");

const courseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {type: String}, 
  description: {type: String},
  estimatedTime: {type: String },
  materialsNeeded: {type: String }
}); 

const Course = mongoose.model('course', courseSchema); 
exports.Course = Course; 