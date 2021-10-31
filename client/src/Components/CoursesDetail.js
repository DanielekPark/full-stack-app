import React from "react";

export const CourseDetail = () => {
  return (
    <div>
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            {/* <a className="button button-secondary" href="#">Return to List</a> */}
          </div>
        </div>
      </div>
      <div className="bounds course--detail">
        <div className="grid-66">
          <div className="course--header">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">title</h3>
            <p>By username</p>
          </div>
          <div className="course--description">

          </div>
        </div>
        <div className="grid-25 grid-right">
          <div className="course--stats">
            <ul className="course--stats--list">
              <li className="course--stats--list--item">
                <h4>Estimated Time</h4>
                <h3>EstimatedTime</h3>
              </li>
              <li className="course--stats--list--item">
                <h4>Materials Needed</h4>
                <ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>    
  )
}