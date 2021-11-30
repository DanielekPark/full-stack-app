import React from "react";
//import {Link} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
  const {fetchData, cancelBtn, handleChange, signInUser, setSignInUser, isSignedIn, setIsSignedIn, isUserSignedIn} = useProvideContext(ProvideContext);

  //GET REQUEST user email & password, FOR SIGNING-IN
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      .then((users) => signIn(users)); 
  }

  //CHECK IF USER'S EMAIL & PASSWORD
  const signIn = async (users) => {
    if(!signInUser.emailAddress && !signInUser.password) return;
    const checkEmail = await users.find((item) => item.emailAddress === signInUser.emailAddress); 
    const checkPassword = await users.find((item) => item.password === signInUser.password);

    //When signed in, the form is not displayed
    if(!checkEmail || !checkPassword) {
      alert('Please check your email and password');
      return;
    }else {
      console.log(checkEmail)
      localStorage.setItem('user', JSON.stringify(signInUser));
      setIsSignedIn(true);  
    }

    //if credentials are valid set user to localstorage and hide the form
  }

  React.useEffect(() => {
    isUserSignedIn(); 
  }, [])  

  React.useEffect(() => {
    console.log(signInUser)
  }, [signInUser]);

  
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
                  <button className="button" type="submit" onSubmit={handleSubmit}>Sign In</button>         
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