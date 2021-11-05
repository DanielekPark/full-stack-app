import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="bounds">
        <h1 className="header--logo">Courses</h1>
        <Link to='/courses'>Courses</Link>
        {/* NAV */}
      </div>
    </div>
  );
}

export default Header;