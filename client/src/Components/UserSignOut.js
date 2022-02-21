import React from "react";
import {Redirect} from "react-router-dom";
import {ProvideContext, useProvideContext} from '../context';
import {Courses} from './Courses'; 
const UserSignOut = () => {
  const {setIsSignedIn} = useProvideContext(ProvideContext);
  
  React.useEffect(() => {
    setIsSignedIn(false)
    localStorage.removeItem('user'); 
    localStorage.removeItem('key');
    localStorage.removeItem('dataToUpdate'); 
    // eslint-disable-next-line
  }, []); 

  return <Redirect to="/" />
}

export default UserSignOut; 