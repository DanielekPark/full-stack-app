import React from "react";
import {ProvideContext, useProvideContext} from '../context';
import CryptoJS from 'crypto-js';
// import bcrypt from 'bcryptjs'

const UserSignIn = () => {
  const {cancelBtn, handleChange, userAccount, setUserAccount, isUserSignedIn, isSignedIn, setIsSignedIn} = useProvideContext(ProvideContext);
  //DELETE EITHER useProvideContext or isUserSignedIn
  //const {isSignedIn} = usePrivateRoute(); 
  const fetchData = async (resource) => {
    const url = `http://localhost:5001/api/${resource}`;

    const data = [{email: userAccount.emailAddress}, {key: userAccount.password}]; 
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), userAccount.password).toString();

    try {
      const response = await fetch(url, 
        {
          method: 'GET',
          headers: {
            'authorization': `Basic ${ciphertext} ${userAccount.password}`,
            'Content-Type': 'application/json; charset=utf-8'
          }, 
          //body: JSON.stringify()
          //if successfull place credentials in local storage
        }); 

      const data = await response.json();
      const user = await data?.find((person) => person.emailAddress === userAccount.emailAddress);
      
      localStorage.setItem('user', JSON.stringify(user)); 
      localStorage.setItem('key', userAccount.password)
      await setIsSignedIn(true); 
    }catch (err) {
      alert('please check your email and password'); 
    }
  }

  //GET REQUEST user email & password, FOR SIGNING-IN
  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchData('users')
      // .then((data) => signIn(data));
  }

  React.useEffect(() => {
    document.title = "Sign In"; 
    isUserSignedIn(); 
  }, [])  

  React.useEffect(() => {
    if(isSignedIn) window.location.href= "/"; 
  }, [isSignedIn]); 

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
  // const signIn = async (users) => {
  //   if(!userAccount.emailAddress && !userAccount.password) return;
  //   const checkEmail = await users?.find((item) => item.emailAddress === userAccount.emailAddress); //if users is null or undefined; optional chaining in case if don't have an array
  //   const checkPassword = await users?.find((item) => item.password === userAccount.password);

  //   //When signed in, the form is not displayed
  //   if(!checkEmail || !checkPassword) {
  //     alert('Please check your email and password');
  //     return;
  //   }else {
  //     console.log(checkEmail)
  //     localStorage.setItem('user', JSON.stringify(checkEmail));
  //     setIsSignedIn(true);  
  //   }
  // }