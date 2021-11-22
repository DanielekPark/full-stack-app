import React from "react";
import {Link, Redirect, Route} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';
import {CoursesDetail} from './CoursesDetail'; 

export const Courses = () => {
  const {fetchData, coursesData, setCoursesData, isSignedIn} = useProvideContext(ProvideContext);
  React.useEffect(() => {
    fetchData('courses')
      .then((data) => setCoursesData(data))
    console.log(isSignedIn)  
  }, []);

  return (
    <div className="bounds">
      {coursesData.map((course) => {
        return (
          <div className="grid-33" key={course._id}>
            <a href={`/coursedetail/${course._id}`}  className="course--module course--link">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
            </a>
          </div>)
      })}
      <div className="grid-33">
        <a href={`/courses/create`} className="course--module course--add--module">
          <h3 className="course--add--title">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 13 13" className="add">
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
            </svg>
              New Course            
          </h3>
        </a>
      </div>
    </div>
    )
  }