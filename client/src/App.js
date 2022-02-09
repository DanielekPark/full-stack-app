import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import './global.css';
import './custom.css';
import {Courses} from './Components/Courses'; 
import {useProvideContext} from "./context"; 
import  {CoursesDetail}  from './Components/CoursesDetail';
import Header from './Components/Header'; 
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';
import CreateCourse from './Components/CreateCourse';
import {UpdateCourse} from './Components/UpdateCourse';
import { NotFound } from './Components/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'><Courses /></Route>
        <Route path='/courses/create'><CreateCourse /></Route>
        <Route path='/courses/:id/update'><UpdateCourse /></Route>
        <Route path="/courses/:id"><CoursesDetail /></Route>
        <Route path='/signin'><UserSignIn /></Route> 
        <Route path='/signup'><UserSignUp /></Route>
        <Route path='/signout'><UserSignOut /></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
/*
CHECK FOR CREATECOURSE LINES 7-9
userRoute /:id NOT NEEDED?
src/Components/UserSignOut.js
src/usePrivateRoute.js
  Line 8:47:  React Hook React.useEffect has a missing dependency: 'setIsSignedIn'. Either include it or remove the dependency array
*/ 