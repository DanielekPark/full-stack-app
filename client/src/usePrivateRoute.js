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
    isUserSignedIn()
  }, [isSignedIn]);

  return {isSignedIn, setIsSignedIn, isUserSignedIn}; 
}
  //DELETE EITHER useProvideContext or isUserSignedIn
  //const {isUserSignedIn, isSignedIn} = useProvideContext(ProvideContext);
//HIGHER ORDER COMPONENT 

/*
http://localhost:3000/coursedetail/6199709b465c74f3b151d634
*/ 
// const PrivateRoute = (route, component) => {
//   const {isUserSignedIn} = useProvideContext(ProvideContext);
// }