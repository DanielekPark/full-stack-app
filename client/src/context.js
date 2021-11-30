import React from "react";

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [coursesData, setCoursesData] = React.useState([]); 
  const [newUser, setNewUser] = React.useState({firstName:'', lastName: '', emailAddress: '', password: ''}); 
  const [course, setCourse] = React.useState({title: '', description: '', estimatedTime: '', materialsNeeded: ''});   
  const [signInUser, setSignInUser] = React.useState({emailAddress: '', password: ''}); 
  const [confirmPassword, setConfirmPassword] = React.useState(''); 
  const [isSignedIn, setIsSignedIn] = React.useState(false); 
  

  //GET REQUEST FOR USERS
  const fetchData = async (resource) => {
    const url = `http://localhost:5001/api/${resource}`; 
    try {
      const response = await fetch(url); 
      return await response.json();
    }catch (err) {
      console.log(`There was a problem ${err}`); 
      throw Error(err); 
    }
  }   

  //FOR CONTROLLED INPUTS, callback IS A REACT HOOK; obj IS THE VALUE OF THE HOOK
  const handleChange = (event, callback, obj) => {
    const name = event.target.name; 
    callback({...obj, [name]: event.target.value}); 
  }

  //when clicked redirects the user to the list of courses. 
  const cancelBtn = () => window.location.href = '/courses'; 
  
  //CREATING COURSES; obj IS THE VALUE OF A REACT HOOK; method IS THE TYPE OF THE HTTP REQUEST
  const handleSubmit = async (event, obj, method) => {    
    event.preventDefault(); 
    const url = "http://localhost:5001/api/courses"; 

    const response = await fetch(url, 
      {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj) 
      }); 
    const data = await response.json(response);
  }  


  //check local storage; make sure the values are valid  
  const isUserSignedIn = () => {
    //pull from local storage and check user; call isSignedIn in react.useEffect, if it exists dont display the form
    const user = JSON.parse(localStorage.getItem('user'));
    //if there's a user stored in storage don't display the form; 
    if(!user) {
      setIsSignedIn(false);
    } else {
      setIsSignedIn(true); 
    }
  }
  
  const signOut = () => {
    const user = localStorage.removeItem('user');  
    setIsSignedIn(false); 
  }

  return (
    <ProvideContext.Provider value={{fetchData, setCoursesData, coursesData, newUser, setNewUser, cancelBtn, confirmPassword, setConfirmPassword, handleChange, course, setCourse, handleSubmit, signInUser, setSignInUser, isSignedIn, setIsSignedIn, isUserSignedIn, signOut}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}