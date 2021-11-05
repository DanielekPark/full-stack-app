import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

export const CoursesDetail = () => {
  const [courseDetail, setCourseDetail] = React.useState([]); 
  const {url} = useProvideContext(ProvideContext); 
  const {id} = useParams(); 

  const fetchData = async () => {
    try {
      const response = await fetch(url); 
      const data = await response.json(); 
      const courseInfo = await data.find((course) => course._id === id);
      setCourseDetail(courseInfo); 
    }catch (err) {
      console.log(`There was a problem ${err}`); 
    }
  }
  
  const deleteCourse = () => fetch(`${url}/coursedetail/${id}`, {method: 'DELETE'});

  React.useEffect(() => {
    fetchData(); 
  }, []);

  return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              {/* UPDATE COURSE LINK */}<span>
                <Link className="button" to={`/updatecourse/${id}`}>Update Course</Link>
                {/* <Link onClick={this.deleteCourse} className="button" href="/">Delete Course</Link> */}
                <Link className="button" to="/">Delete Course</Link>                
              </span>  
              <Link className="button button-secondary" to="/courses">Return to List</Link>
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
  
  // use fetch to get info from Rest APi
  //look at pdf
}