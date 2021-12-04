import React from "react";
//import {Redirect} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
  const {fetchData, cancelBtn, handleChange, userAccount, setUserAccount, isUserSignedIn, signIn, isSignedIn} = useProvideContext(ProvideContext);

  //DELETE EITHER useProvideContext or isUserSignedIn
  //const {isSignedIn} = usePrivateRoute(); 
  
  //GET REQUEST user email & password, FOR SIGNING-IN
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      .then((users) => signIn(users)); 
  }

  React.useEffect(() => {
    isUserSignedIn(); 
  }, [])  

  React.useEffect(() => {
    console.log(userAccount)
  }, [userAccount]);

  //const if(!isSignedIn) return <Redirect to="/signin" />  
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
                <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" autoComplete="username" value={userAccount.emailAddress} onChange={(event) => handleChange(event, setUserAccount, userAccount)}/></div>
                <div><input id="password" name="password" type="password" placeholder="Password" autoComplete="password" value={userAccount.password} onChange={(event) => handleChange(event, setUserAccount, userAccount)}/></div>
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