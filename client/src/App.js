import React from 'react';
import './App.css';
import './global.css';
import './custom.css';
import { Courses } from './Components/Courses';
import {useProvideContext, ProvideContext, AppProvider} from './context'; 

function App() {
  //const {} = useProvideContext();
  return (
    <div className="App">
      <Courses />
    </div>
  );
}

export default App;
