import React from 'react';
import {Link} from "react-router-dom";
import UserSignIn from "./UserSignIn"; 
import {ProvideContext, useProvideContext} from '../context';

const Header = () => {
  const {isSignedIn, setIsSignedIn} = useProvideContext(ProvideContext);

  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">Courses</h1>
        <nav>
          {isSignedIn ? 
            <>
              <span>Welcome firstName lastName</span>
              <a className="signout" href="/signout">Sign Out</a>
            </>
              : 
            <>
              <a className="signup" href="/signup">Sign Up</a>
              <a className="signin" href="/signin">Sign In</a>
            </>  
          }
        </nav>
      </div>
    </div>
  );
}

export default Header;