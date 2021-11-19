import React from "react";
import {ProvideContext, useProvideContext} from '../context';

const CreateCourse = () => {
  const {cancelBtn, handleChange, newCourse, setNewCourse} = useProvideContext(ProvideContext);

  const handleSubmit = async (event, obj) => {    
    event.preventDefault(); 
    const url = "http://localhost:5001/api/courses"; 

    const response = await fetch(url, 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCourse) 
      }); 
    const data = await response.json(obj);
  }

  React.useEffect(() => {
    console.log(newCourse);
  }, []);

  React.useEffect(() => {
    console.log(newCourse);
  }, [newCourse]);

  return (
    <div className="bounds course--detail">
      <h1>Create A Course</h1>
      <div id="container">
        <form onSubmit={(event) => handleSubmit(event, newCourse)}>
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <div>
                {/* <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." defaultValue={this.state.title} /> */}
                <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." onChange={(event) => handleChange(event, setNewCourse, newCourse)}/>                
              </div>
              {/* <p>By {this.state.user}</p> */}
              <p>By user name</p>
            </div>
            <div className="course--description">
              <div>
                {/* <textarea id="description" name="description" placeholder="Course description..." value={this.state.description} onChange={event => this.handleFormChange('description', event)} /> */}
                <textarea id="description" name="description" placeholder="Course description..." onChange={(event) => handleChange(event, setNewCourse, newCourse)}/>                
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
                    <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" onChange={(event) => handleChange(event, setNewCourse, newCourse)}/>                    
                  </div>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <div>
                    {/* <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.materialsNeeded} onChange={event => this.handleFormChange('materialsNeeded', event)} /> */}
                    <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={(event) => handleChange(event, setNewCourse, newCourse)}/>                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-100 pad-bottom">
            {/* <button className="button" type="submit" onClick={this.updateOrCreateCourse}>{this.getAction(true)} Course</button>
            <button className="button button-secondary" onClick={this.goToCourse}>Cancel</button> */}
            <button className="button" type="submit">Course</button>
            <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>            
          </div>
        </form>
      </div>
    </div>
  )  
}

export default CreateCourse; 