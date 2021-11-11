import React from "react";
//import { data } from './Data/data'; 

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [coursesData, setCoursesData] = React.useState([]); 
  
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

  //RE-RENDERS IF FETCHING DATA IS SUCCESSFUL
  // React.useEffect(() => {
  //   console.log(coursesData); 
  // }, [coursesData])

  return (
    <ProvideContext.Provider value={{fetchData, setCoursesData, coursesData}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}