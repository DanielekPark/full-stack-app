import React from "react";
//import {Link} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
  const {fetchData, isSignedIn, setIsSignedIn, cancelBtn, handleChange, signInUser, setSignInUser} = useProvideContext(ProvideContext);

  //GET REQUEST user email & password, FOR SIGNING-IN
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      .then((users) => checkUser(users)); 
  }

  const checkUser = async (users) => {
    //check to see if the information submitted matches any of the registered users    
    if(!signInUser.emailAddress && !signInUser.password) return;
    const checkEmail = await users.find((item) => item.emailAddress === signInUser.emailAddress); 
    const checkPassword = await users.find((item) => item.password === signInUser.password);

    //When signed in, the form is not displayed
    if(!checkEmail || !checkPassword) {
      alert('Please check your email and password');
    } else {
      setIsSignedIn(true);
      //REMOVE setIsSignedIn
      //USE LOCAL STORAGE TO SET EMAIL AND PASSWORD
    } 
  }

  React.useEffect(() => {
    console.log(signInUser)
  }, [signInUser])
  
  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        {isSignedIn ? 
          null
          : 
          <>
            <h1>Sign In</h1>
            <div>
              <form id='signInForm' onSubmit={handleSubmit}>
                <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" autoComplete="username" value={signInUser.emailAddress} onChange={(event) => handleChange(event, setSignInUser, signInUser)}/></div>
                <div><input id="password" name="password" type="password" placeholder="Password" autoComplete="password" value={signInUser.password} onChange={(event) => handleChange(event, setSignInUser, signInUser)}/></div>
                <div id="buttons" className="grid-100 pad-bottom">            
                  <button className="button" type="submit">Sign In</button>         
                  <button className="button button-secondary" onClick={cancelBtn}>Cancel</button>            
                </div>
              </form>     
            </div>
            <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
          </>
        }
      </div>
    </div>  
  )  
}

export default UserSignIn; 