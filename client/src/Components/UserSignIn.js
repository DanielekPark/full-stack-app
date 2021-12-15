import React from "react";
//import {Redirect} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
  const {cancelBtn, handleChange, userAccount, setUserAccount, isUserSignedIn, isSignedIn, setIsSignedIn} = useProvideContext(ProvideContext);

  //DELETE EITHER useProvideContext or isUserSignedIn
  //const {isSignedIn} = usePrivateRoute(); 
  
  // 1.
  //how to add authorization in the fetch request (FRONT END)
  //https://gist.github.com/ivermac/922def70ed9eaf83799b68ab1a587595  
  /*
  LOOK AT CLARK'S REPO
  */

  const fetchData = async (resource) => {
    const url = `http://localhost:5001/api/${resource}`; 

    const encodeCredentials = btoa(`${userAccount.emailAddress} : ${userAccount.password}`);

    try {
      const response = await fetch(url, 
        {
          method: 'GET',
          headers: {
            Authorization: `Basic ${encodeCredentials}`, 
            'Content-Type': 'application/json'
          }
        }); 
      return await response.json();
    }catch (err) {
      console.log(`There was a problem ${err}`); 
    }
  }
  
  const signIn = async (users) => {
    if(!userAccount.emailAddress && !userAccount.password) return;
    const checkEmail = await users.find((item) => item.emailAddress === userAccount.emailAddress); 
    const checkPassword = await users.find((item) => item.password === userAccount.password);

    //When signed in, the form is not displayed
    if(!checkEmail || !checkPassword) {
      alert('Please check your email and password');
      return;
    }else {
      console.log(checkEmail)
      localStorage.setItem('user', JSON.stringify(checkEmail));
      setIsSignedIn(true);  
    }
  }  
  
  //GET REQUEST user email & password, FOR SIGNING-IN
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      .then((users) => signIn(users))
  }

  React.useEffect(() => {
    document.title = "Sign In"; 
    isUserSignedIn(); 
  }, [])  

  React.useEffect(() => {
    if(isSignedIn) window.location.href= "/"; 
  }, [isSignedIn]); 

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