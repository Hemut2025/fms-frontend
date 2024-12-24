import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
    document.querySelector(".main-content")?.classList.toggle("expanded");
  };
  return (
    <div className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <div className="nav-header">
        <h1 className="nav-title">hemut</h1>
        <button className="toggle-btn" onClick={toggleNav}>
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronRight : faChevronLeft}
          />
        </button>
      </div>

      <nav>
        <NavLink to="/dashboard" className="nav-item">
          Dashboard
        </NavLink>
        <NavLink to="/loads" className="nav-item">
          Loads
        </NavLink>
        <NavLink to="/accounting" className="nav-item">
          Accounting
        </NavLink>
        <NavLink to="/maintenance" className="nav-item">
          Maintenance
        </NavLink>
        <NavLink to="/reports" className="nav-item">
          Reports
        </NavLink>
        <NavLink to="/tools" className="nav-item">
          Tools
        </NavLink>
        <NavLink to="/dispatching" className="nav-item">
          Dispatching
        </NavLink>
        <NavLink to="/invoices" className="nav-item">
          Invoices
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
