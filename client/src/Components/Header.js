import React from 'react';
import {Link} from "react-router-dom";
import UserSignIn from "./UserSignIn"; 
import {ProvideContext, useProvideContext} from '../context';

const Header = () => {
  const [userName, setUserName] = React.useState([]); 
  const {isSignedIn, setIsSignedIn, isUserSignedIn, signOut} = useProvideContext(ProvideContext);

  React.useEffect(() => {
    isUserSignedIn(); 
    // eslint-disable-next-line  
  }, []);

  React.useEffect(() => {
    if(isSignedIn){
      const user = JSON.parse(localStorage.getItem('user'));
      setUserName(user)
    }
  }, [isSignedIn])

  return (
    <div className="header">
      <div className="bounds">
        <a href="/"><h1 className="header--logo">Courses</h1></a>
        <nav>
          {isSignedIn ? 
            <>
              <span>Welcome {`${userName.firstName} ${userName.lastName}`}</span>
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