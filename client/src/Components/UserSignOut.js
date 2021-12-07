import React from "react";
import {Redirect} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';

const UserSignOut = () => {
  const {setIsSignedIn} = useProvideContext(ProvideContext);
  
  React.useEffect(() => {
    setIsSignedIn(false)
    localStorage.removeItem('user'); 
  }, []); 

  return <Redirect to='/' />
}

export default UserSignOut; 