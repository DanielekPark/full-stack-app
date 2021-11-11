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
import UserSignIn from './Components/UserSignIn';

function App() {
  const [coursesData, setCoursesData] = React.useState([]);   

  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/courses'><Courses /></Route>
      <Route path="/coursedetail/:id"><CoursesDetail /></Route>
      <Route path='/updatecourse/:id'><UpdateCourse /></Route>  
      <Route path='/sign-in'><UserSignIn /></Route>                
    </BrowserRouter>  
  );
}

export default App;
