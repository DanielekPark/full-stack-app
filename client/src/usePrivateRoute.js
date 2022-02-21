import React from "react";
import {ProvideContext, useProvideContext} from './context';
//Use usePrivateRoute OR USE HOCs (Higher Order Components)
// use to configure/protect routes for:
// /courses/create
// /courses/update/:id 

//CUSTOM HOOK
export const usePrivateRoute = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false); 
  
  const isUserSignedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(user){
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false); 
    }
    console.log(isSignedIn); 
  }  

  React.useEffect(() => {
    isUserSignedIn(); 
    // eslint-disable-next-line
  }, [isSignedIn]);

  return {isSignedIn, setIsSignedIn, isUserSignedIn}; 
}