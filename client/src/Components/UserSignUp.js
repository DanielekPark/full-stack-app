import React from "react";
import {ProvideContext, useProvideContext} from '../context';

const UserSignUp = () => {
  
  const {fetchData, firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, password, setPassword, isSignedIn, setIsSignedIn, user, setUser, cancelBtn, confirmPassword, setConfirmPassword} = useProvideContext(ProvideContext);

  const handleChange = (event) => {
    const name = event.target.name; 
    setUser({...user, [name]: event.target.value}); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const url = "http://localhost:5001/api/users"; 

    const response = await fetch(url, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(user) 
      }); 
    const data = await response.json(); 
    
  }

  return (
    <div className="bounds">
      <div className="grid-33 centered signup">
        <h1>Sign Up</h1>
        <div>
          <form id="formId" onSubmit={handleSubmit}>            
            <div><input id="firstName" name="firstName" type="text" placeholder="First Name" value={user.firstName} onChange={handleChange}/></div>
            <div><input id="lastName" name="lastName" type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange}/></div>
            <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" value={user.emailAddress} onChange={handleChange}/></div>
            <div><input id="password" name="password" type="password" autoComplete="newpassword" placeholder="Password" value={user.password} onChange={handleChange}/></div>
            <div><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="newpassword" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/></div>
            <div id="buttonId" className="grid-100 pad-bottom">
              <button className="button" type="submit">Sign Up</button>
              <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>                
            </div>
          </form>
        </div>
        <p>Already have a user account? <a href="/sign-in">Click here</a> to sign in!</p>
      </div>
    </div>
  )  
}


export default UserSignUp; 