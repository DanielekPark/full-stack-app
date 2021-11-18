import React from "react";
//import {Link} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
  const {fetchData, firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, password, setPassword, isSignedIn, setIsSignedIn, cancelBtn} = useProvideContext(ProvideContext);

  // used a get request to retrieve the user's email and password when the sign in button is clicked 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      .then((users) => checkUser(users)); 
  }

  const checkUser = async (users) => {
    //check to see if the information submitted matches any of the registered users    
    if(!emailAddress && !password) return;
    const checkEmail = await users.find((item) => item.emailAddress === emailAddress); 
    const checkPassword = await users.find((item) => item.password === password);

    //When signed in, the form is not displayed
    if(!checkEmail || !checkPassword) {
      alert('Please check your email and password');
    } else {
      setFirstName(`${checkEmail.firstName}`); 
      setLastName(`${checkEmail.lastName}`); 
      setIsSignedIn(true);
    } 
    
    setEmailAddress(''); 
    setPassword('');    
  }
  
  // const errorId = 'error';
  // const formId = '';
  // const buttonsId = '';  

  return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>{isSignedIn ? `Hello ${firstName} ${lastName}!` : 'Sign In'}</h1>
          {isSignedIn ? 
            null 
            : 
            <>
              <div>
                <form id='signInForm' onSubmit={handleSubmit}>
                  <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" autoComplete="username" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)}/></div>
                  <div><input id="password" name="password" type="password" placeholder="Password" autoComplete="password" value={password} onChange={(event) => setPassword(event.target.value)}/></div>
                  <div id="buttons" className="grid-100 pad-bottom">            
                    <button className="button" type="submit">Sign In</button>         
                    <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>            
                  </div>
                </form>     
              </div>
              <p>Don't have a user account? <a href="/sign-up">Click here</a> to sign up!</p>
            </>
          }
        </div>
      </div>  
    )  
}

export default UserSignIn; 