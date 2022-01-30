import React from "react";
import {Link, useParams} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

export const CoursesDetail = () => {
  const [courseDetail, setCourseDetail] = React.useState([]); 
  const {fetchData, cancelBtn} = useProvideContext(ProvideContext); 
  const {id} = useParams(); 
  //const {isSignedIn} = usePrivateRoute(); 

  //User Authorization
  /*
  {isSignedIn && id === courseDetail.user ? 
    <span>
      <a className="button" href={`/courses/${id}/update`}>Update Course</a>
      <a onClick={deleteCourse} className="button" href="/">Delete Course</a>                
    </span> 
    :
    null} 
  */ 
  
  const deleteCourse = () => fetch(`http://localhost:5001/api/courses/${id}`, {method: 'DELETE'});

  React.useEffect(() => {
    document.title = "Course Details"; 
    fetchData(`courses/${id}`)
      .then((data) => setCourseDetail(data))
      .catch((err) => cancelBtn())
  }, []);

  React.useEffect(() => {
    console.log(courseDetail);
  }, [courseDetail]); 

  return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <span>
                <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                <a onClick={deleteCourse} className="button" href="/">Delete Course</a>                
              </span>  
              <a className="button button-secondary" href="/">Return to List</a>
            </div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{courseDetail.title}</h3>
              <p>By username: {courseDetail.user}</p>
            </div>
            <div className="course--description">
              <h4>Course Detail</h4>
              {courseDetail.description}
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{courseDetail.estimatedTime}</h3> 
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                  {courseDetail.materialsNeeded}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>        
  )  
}