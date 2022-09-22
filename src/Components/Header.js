import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css'



const Header = () => {
  return (
    <React.Fragment>
      <h1 className="header">
        Help Queue
      </h1>
      <Link to="/">
        <div className="homeLink">
          <HomeIcon className="homeIcon" style={{fontSize: 50}} />
        </div>
      </Link>
      <div className="linkContainer">
        <Link to="/sign-in">
          <div className="headerLink">
            <LoginIcon />
            <p>Sign In</p>
          </div>
        </Link>
        <Link to="/sign-out">
          <div className="headerLink">
            <LogoutIcon />
            <p>Sign Out</p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Header;