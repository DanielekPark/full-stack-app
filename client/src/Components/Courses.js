import React from "react";
import {Link, Redirect, Route} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';
import {CoursesDetail} from './CoursesDetail'; 
import { NewCourse } from "./NewCourse";
//import { NewCourse } from "./NewCourse";

export const Courses = () => {
  const {fetchData, coursesData} = useProvideContext(ProvideContext);
  
  //const url = 'http://localhost:5001/api/courses'; 

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url); 
  //     const data = await response.json();
  //     setCoursesData(data);
  //   }catch (err) {
  //     console.log(`There was a problem ${err}`); 
  //   }
  // }  

  React.useEffect(() => {
    fetchData(); 
  }, []);

  //<Route /> RENDERS UI when the path matches the url 
  //<Link /> USE FOR LINKING ROUTES TO YOUR APP

  return (
    <div className="bounds">
      {coursesData.map((course) => {
        return (
          <div className="grid-33" key={course._id}>
            <Link to={`/coursedetail/${course._id}`}  className="course--module course--link">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
            </Link>
          </div>)
      })}
      <NewCourse />
    </div>
    )
  }