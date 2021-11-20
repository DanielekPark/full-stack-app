import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './global.css';
import './custom.css';
import {Courses} from './Components/Courses'; 
import {useProvideContext} from "./context"; 
import  {CoursesDetail}  from './Components/CoursesDetail';
import Header from './Components/Header'; 
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import CreateCourse from './Components/CreateCourse';
import {UpdateCourse} from './Components/UpdateCourse';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/courses'><Courses /></Route>
      <Route path="/coursedetail/:id"><CoursesDetail /></Route>
      <Route path='/sign-in'><UserSignIn /></Route> 
      <Route path='/sign-up'><UserSignUp /></Route>
      <Route path='/createcourse'><CreateCourse /></Route>
      <Route path='/updatecourse/:id'><UpdateCourse /></Route>                
    </BrowserRouter>  
  );
}

export default App;
