import React from "react";
import {ProvideContext, useProvideContext} from '../context';

const UserSignUp = () => {
  
  const {newUser, setNewUser, cancelBtn, confirmPassword, setConfirmPassword, handleChange} = useProvideContext(ProvideContext);

  const catchErr = (err) => {
    console.log(err); 
    //alert(`please check your email and password`)
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    //return if length or passwords don't match:

    const url = "http://localhost:5001/api/users"; 
    //try{}catch(err)

    const response = await fetch(url, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(newUser) 
      }); 
    const data = await response.json(); 
    localStorage.setItem('user', JSON.stringify(data)); 
    window.location.href = '/'; 
  }

  return (
    <div className="bounds">
      <div className="grid-33 centered signup">
        <h1>Sign Up</h1>
        <div>
          <form id="formId" onSubmit={handleSubmit}>            
            <div><input id="firstName" name="firstName" type="text" placeholder="First Name" value={newUser.firstName} onChange={(event) => handleChange(event, setNewUser, newUser)}/></div>
            <div><input id="lastName" name="lastName" type="text" placeholder="Last Name" value={newUser.lastName} onChange={(event) => handleChange(event, setNewUser, newUser)}/></div>
            <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" value={newUser.emailAddress} onChange={(event) => handleChange(event, setNewUser, newUser)}/></div>
            <div><input id="password" name="password" type="password" autoComplete="newpassword" placeholder="Min 7 characters" value={newUser.password} onChange={(event) => handleChange(event, setNewUser, newUser)}/></div>
            <div><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="newpassword" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/></div>
            <div id="buttonId" className="grid-100 pad-bottom">
              <button className="button" type="submit">Sign Up</button>
              <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>                
            </div>
          </form>
        </div>
        <p>Already have a user account? <a href="/signin">Click here</a> to sign in!</p>
      </div>
    </div>
  )  
}


export default UserSignUp; 