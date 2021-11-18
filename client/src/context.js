import React from "react";
//import { data } from './Data/data'; 

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [coursesData, setCoursesData] = React.useState([]); 
  const [firstName, setFirstName] = React.useState([]); 
  const [lastName, setLastName] = React.useState([]); 
  const [emailAddress, setEmailAddress] = React.useState(''); 
  const [password, setPassword] = React.useState(''); 
  const [user, setUser] = React.useState({firstName:'', lastName: '', emailAddress: '', password: ''})
  const [confirmPassword, setConfirmPassword] = React.useState(''); 
  const [isSignedIn, setIsSignedIn] = React.useState(false);  
  //FETCHES DATA FOR USERS OR COURSES 
  const fetchData = async (resource) => {
    const url = `http://localhost:5001/api/${resource}`; 
    try {
      const response = await fetch(url); 
      return await response.json();
    }catch (err) {
      console.log(`There was a problem ${err}`); 
    }
  }   

  //when clicked redirects the user to the list of courses. 
  const cancelBtn = () => window.location.href = '/courses';   

  return (
    <ProvideContext.Provider value={{fetchData, setCoursesData, coursesData, firstName, lastName, setLastName, setFirstName, emailAddress, setEmailAddress, password, setPassword, isSignedIn, setIsSignedIn, user, setUser, cancelBtn, confirmPassword, setConfirmPassword}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}