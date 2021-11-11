import React from 'react';
import {Link} from "react-router-dom";
import UserSignIn from "./UserSignIn"; 

const Header = () => {
  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">Courses</h1>
      </div>
    </div>
  );
}

export default Header;