import React from "react";
//import {Link} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignIn = () => {
//SIGN IN
  const [users, setUsers] = React.useState([]); //use to check for list of users
  const [emailAddress, setEmailAddress] = React.useState(''); 
  const [password, setPassword] = React.useState(''); 
  const [isSignedIn, setIsSignedIn] = React.useState(false); 
  
  const {fetchData} = useProvideContext(ProvideContext); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
  }

  // use a get request to retrieve the user's email and password when the sign in button is clicked
  //check to see if the information submitted matches any of the registered users
  //look at users hook
  // Get the value from text inputs
  //https://medium.com/geekculture/using-react-hooks-to-get-input-value-9e0aa19b6b37
  //cancel put redirects the user to the list of courses. 
  /* When signed in the form is not displayed
  and redirects to the href /
  */

  // const errorId = 'error';
  // const formId = 'signInForm';
  // const buttonsId = 'buttons';  

return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        {/* {needs an id 
        form
        div      } */}
        <div>
        {/* <form id={formId}> */}
        <form onSubmit={handleSubmit}>
            <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" autoComplete="username" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/></div>
            <div><input id="password" name="password" type="password" placeholder="Password" autoComplete="password" value={password} onChange={(e) => setPassword(e.target.value)}/></div>
            {/* <div id={buttonsId} className="grid-100 pad-bottom"> */}
            <div id="#" className="grid-100 pad-bottom">            
              {/* <button className="button" type="submit" onClick={this.signIn}>Sign In</button> */}
              <button className="button" type="submit">Sign In</button>         
              {/* <button className="button button-secondary" onClick={this.props.cancel}>Cancel</button> */}
              <button className="button button-secondary">Cancel</button>            
            </div>
          </form>
        </div>
        <p>Don't have a user account? <a href="/sign-up">Click here</a> to sign up!</p>
      </div>
    </div>  
  )  
}

export default UserSignIn; 