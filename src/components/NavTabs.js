import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  nameStyle: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    paddingLeft: "10px", 
    paddingRight: "10px", 
    marginRight: "50px", 
    backgroundColor: "#20B2AA", 
    color: "white"
  }
};

function NavTabs() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" style={styles.nameStyle}>
        <div>
          Your Name
        </div>
      </li>      
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
