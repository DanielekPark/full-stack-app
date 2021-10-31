import React from "react";
import {Link, Redirect, Route} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';
import {CourseDetail} from './CoursesDetail'; 
import { NewCourse } from "./NewCourse";

export const Courses = () => {
  const {coursesData} = useProvideContext(ProvideContext); 

  //<Route /> RENDERS UI when the path matches the url 
  //<Link /> USE FOR LINKING ROUTES TO YOUR APP

  return (
    <div className="bounds">
      {coursesData.map((course) => {
        const {title, _id} = course; 
        return (
          <div className="grid-33" key={_id}>
            <a href={`/#`} className="course--module course--link">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{title}</h3>
            </a>
          </div>)
      })}
      <NewCourse />
    </div>
    )
  }