import React from "react";
import {ProvideContext, useProvideContext} from '../context';
import {useParams} from "react-router-dom";
import { usePrivateRoute } from "../usePrivateRoute";
import CryptoJS from 'crypto-js';

export const UpdateCourse = () => {
  const {cancelBtn, handleChange, course, setCourse} = useProvideContext(ProvideContext);
  const {id} = useParams();

  const {isSignedIn, isUserSignedIn} = usePrivateRoute(); 
  const courseToUpdate = JSON.parse(localStorage.getItem('dataToUpdate')); 

  const url = `http://localhost:5001/api/courses/${id}`; 
  const handleSubmit = async (event, obj, method) => {    
    event.preventDefault(); 

    const userData = JSON.parse(localStorage.getItem('user'));  
    const response = await fetch(url, 
      {
        method: method,
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(obj) 
      }); 
    const data = await response.json(response); 
  }  

  React.useEffect(() => {
    document.title = "Update A Course"; 
    setCourse(courseToUpdate)
  }, []); 

  React.useEffect(() => {
    console.log(course);
  }, [course]); 
  
  if(isSignedIn){
    return (
      <div className="bounds course--detail">
        <h1>Update A Course</h1>
        <div id="container">
          <form onSubmit={(event) => handleSubmit(event, course, 'PUT')}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  {/* <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." defaultValue={this.state.title} /> */}
                  <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." onChange={(event) => handleChange(event, setCourse, course)} value={course.title} />                
                </div>
                {/* <p>By {this.state.user}</p> */}
                <p>By Needs to be edited to include user name</p>
              </div>
              <div className="course--description">
                <div>
                  {/* <textarea id="description" name="description" placeholder="Course description..." value={this.state.description} onChange={event => this.handleFormChange('description', event)} /> */}
                  <textarea id="description" name="description" placeholder="Course description..." onChange={(event) => handleChange(event, setCourse, course)} value={course.description}/>                
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                      {/* <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" defaultValue={this.state.estimatedTime} /> */}
                      <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" onChange={(event) => handleChange(event, setCourse, course)} value={course.estimatedTime} />                    
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                      {/* <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.materialsNeeded} onChange={event => this.handleFormChange('materialsNeeded', event)} /> */}
                      <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={(event) => handleChange(event, setCourse, course)} value={course.materialsNeeded} />                    
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              {/* <button className="button" type="submit" onClick={this.updateOrCreateCourse}>{this.getAction(true)} Course</button>
              <button className="button button-secondary" onClick={this.goToCourse}>Cancel</button> */}
              <button className="button" type="submit" onClick={cancelBtn}>Update</button>
              <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>            
            </div>
          </form>
        </div>
      </div>
    )
  } else{
    return <h1>Please sign in</h1>
  }  
}
// const url = `http://localhost:5001/api/courses/${id}`; 
/*
const handleSubmit = async (event, obj, method) => {    
  event.preventDefault(); 
  const url = "http://localhost:5001/api/courses"; 
  const data = [{email: userAccount.emailAddress}, {key: userAccount.password}]; 
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), userAccount.password).toString();
  const response = await fetch(url, 
    {
      method: method,
      headers: {
        'authorization': `Basic ${ciphertext} ${userAccount.password}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify(obj) 
    }); 
  const data = await response.json(response);
}    
//include user in localstorage for authentication header
*/ 