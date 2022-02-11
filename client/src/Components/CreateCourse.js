import React from "react";
import {ProvideContext, useProvideContext} from '../context';
import { usePrivateRoute } from "../usePrivateRoute";

import CryptoJS from "crypto-js";

const CreateCourse = () => {
  const {cancelBtn, course, setCourse, userAccount} = useProvideContext(ProvideContext);
  const {isSignedIn, isUserSignedIn, setIsSignedIn} = usePrivateRoute(); 
  const user = JSON.parse(localStorage.getItem('user')); 
  const key = JSON.parse(localStorage.getItem('key'));

  React.useEffect(() => {
    document.title = "Create A Course"; 
    console.log(isSignedIn)
  }, [])

  React.useEffect(() => {
    console.log(course)
  }, [course])

  //CALLBACK IS A REACT HOOK
  const handleChange = (event, callback, obj) => {
    const name = event.target.name; 
    callback({...obj, [name]: event.target.value}); 
  }

  const handleSubmit = async (event, obj, method) => {    
    event.preventDefault(); 
    const url = "http://localhost:5001/api/courses"; 
    try {
      // const data = [{email: user.emailAddress}, {key: key.key}]; 
      // const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key.key).toString();
      const response = await fetch(url, 
        {
          method: method,
          headers: {
            // 'authorization': `Basic ${ciphertext} ${key.key}`,
            'Content-Type': 'application/json'},
          body: JSON.stringify(obj) 
        }); 
      return await response.json();
    }catch (err){
      console.log('create course error')
    }

  }    

  if(isSignedIn){
    return (
      <div className="bounds course--detail">
        <h1>Create A Course</h1>
        <div id="container">
          <form onSubmit={(event) => handleSubmit(event, course, 'POST')}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  {/* <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." defaultValue={this.state.title} /> */}
                  <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." onChange={(event) => handleChange(event, setCourse, course)} />                
                </div>
                {/* <p>By {this.state.user}</p> */}
              </div>
              <div className="course--description">
                <div>
                  {/* <textarea id="description" name="description" placeholder="Course description..." value={this.state.description} onChange={event => this.handleFormChange('description', event)} /> */}
                  <textarea id="description" name="description" placeholder="Course description..." onChange={(event) => handleChange(event, setCourse, course)}/>                
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
                      <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" onChange={(event) => handleChange(event, setCourse, course)}/>                    
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                      {/* <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.materialsNeeded} onChange={event => this.handleFormChange('materialsNeeded', event)} /> */}
                      <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={(event) => handleChange(event, setCourse, course)}/>                    
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              {/* <button className="button" type="submit" onClick={this.updateOrCreateCourse}>{this.getAction(true)} Course</button>
              <button className="button button-secondary" onClick={this.goToCourse}>Cancel</button> */}
              <button className="button" type="submit" onClick={cancelBtn}>Create Course</button>
              <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>            
            </div>
          </form>
        </div>
      </div>
    )     
  }else {
    return <h1>Please sign in</h1>
  }
}

export default CreateCourse; 