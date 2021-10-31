import React from "react";
import { data } from './Data/data'; 

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [coursesData, setCoursesData] = React.useState([]); 
  const [isLoading, setIsloading] = React.useState(true);

  //FETCHES DATA
  const url = 'http://localhost:5001/api/courses'
  const fetchData = async () => {
    setIsloading(true); 
    try {
      const response = await fetch(url); 
      const data = await response.json();
      setIsloading(false); 
      setCoursesData(data);
    }catch (err) {
      console.log(`There was a problem ${err}`); 
    }
  }
  React.useEffect(() => {
    fetchData(); 
  }, []);
  
  //RE-RENDERS IF FETCHING DATA IS SUCCESSFUL
  React.useEffect(() => {
    console.log(coursesData); 
  }, [coursesData])

  return (
    <ProvideContext.Provider value={{coursesData, setCoursesData, data, isLoading}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}