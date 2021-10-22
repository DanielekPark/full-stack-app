import React from "react";

const ProvideContext = React.createContext();

const AppProvider = ({children}) => {
  const [courses, setCourses] = React.useState([]);   

  const api = 'http://localhost:5000/api';

  const fetchCourses = async () => {
    const data = await fetch(`${api}/courses`);
    console.log(data);
  }

  React.useEffect(() => {
    fetchCourses(); 
  }, []);

  return (
    <ProvideContext.Provider value={{fetchCourses, courses, setCourses}}>
      {children}
    </ProvideContext.Provider>
  );
}

export const useProvideContext = () => React.useContext(ProvideContext); 
export {ProvideContext, AppProvider}