import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './global.css';
import './custom.css';
import {Courses} from './Components/Courses'; 
import {useProvideContext} from "./context"; 
import  {CoursesDetail}  from './Components/CoursesDetail';
import  {UpdateCourse}  from './Components/UpdateCourse';
import {NewCourse} from './Components/NewCourse';
import Header from './Components/Header'; 

function App() {
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

  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/courses'><Courses /></Route>
      <Route path="/coursedetail/:id"><CoursesDetail /></Route>
      <Route path='/updatecourse/:id'><UpdateCourse /></Route>        
    </BrowserRouter>  
  );
}

export default App;
