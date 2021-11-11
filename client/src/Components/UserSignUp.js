import React from "react";

const UserSignUp = () => {
    return (
      <div className="bounds">
        <div className="grid-33 centered signup">
          <h1>Sign Up</h1>
          <div>
            {/* <form id={formId}> */}
            <form id="formId">            
              <div><input id="firstName" name="firstName" type="text" placeholder="First Name"/></div>
              <div><input id="lastName" name="lastName" type="text" placeholder="Last Name"/></div>
              <div><input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address"/></div>
              <div><input id="password" name="password" type="password" autoComplete="newpassword" placeholder="Password"/></div>
              <div><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="newpassword" placeholder="Confirm Password"/></div>
              {/* <div id={buttonsId} className="grid-100 pad-bottom"> */}
              <div id="buttonId" className="grid-100 pad-bottom">
                {/* <button className="button" type="submit" onClick={this.signUp}>Sign Up</button> 
                <button className="button button-secondary" onClick={this.props.cancel}>Cancel</button>*/}
                <button className="button" type="submit">Sign Up</button>
                <button className="button button-secondary">Cancel</button>                
              </div>
            </form>
          </div>
          <p>Already have a user account? <a href="/sign-in">Click here</a> to sign in!</p>
        </div>
      </div>
    )  
}


//

export default UserSignUp; 