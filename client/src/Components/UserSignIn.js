import React from "react";

const userSignIn = () => {
return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        {/* {needs an id 
        for 
        form
        div      } */}
        <div>
        <form>
          {/* <form id={formId}> */}
            <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" autoComplete="username"/></div>
            <div><input id="password" name="password" type="password" placeholder="Password" autoComplete="password"/></div>
            <div id={buttonsId} className="grid-100 pad-bottom">
              <button className="button" type="submit"  >Sign In</button>          
              {/* <button className="button" type="submit" onClick={this.signIn}>Sign In</button> */}
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