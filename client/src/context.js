import React from "react";
//import { data } from './Data/data'; 

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [coursesData, setCoursesData] = React.useState([]); 
  const url = 'http://localhost:5001/api/courses'; 

  const fetchData = async () => {
    try {
      const response = await fetch(url); 
      const data = await response.json();
      setCoursesData(data); 
    }catch (err) {
      console.log(`There was a problem ${err}`); 
    }
  }   

  //RE-RENDERS IF FETCHING DATA IS SUCCESSFUL
  // React.useEffect(() => {
  //   console.log(coursesData); 
  // }, [coursesData])

  return (
    <ProvideContext.Provider value={{fetchData, coursesData, url}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}