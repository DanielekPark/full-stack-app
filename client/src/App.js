import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './global.css';
import './custom.css';
import {Courses} from './Components/Courses'; 
import {useProvideContext} from "./context"; 

function App() {
  const {coursesData, isLoading} = useProvideContext(); 

  return (
    <BrowserRouter>
      {isLoading ? 
        <h1 className="loading">LOADING...</h1> 
          : 
        <Route exact path='/' render={() => <Courses /> } />
      }

    </BrowserRouter>  
  );
}

export default App;
