import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.substring(1).toLowerCase();

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
        <NavLink
          to="/dashboard"
          className={`nav-item ${
            currentPath === "dashboard" ? "selected" : ""
          }`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/loads"
          className={`nav-item ${currentPath === "loads" ? "selected" : ""}`}
        >
          Loads
        </NavLink>
        <NavLink
          to="/accounting"
          className={`nav-item ${
            currentPath === "accounting" ? "selected" : ""
          }`}
        >
          Accounting
        </NavLink>
        <NavLink
          to="/maintenance"
          className={`nav-item ${
            currentPath === "maintenance" ? "selected" : ""
          }`}
        >
          Maintenance
        </NavLink>
        <NavLink
          to="/reports"
          className={`nav-item ${currentPath === "reports" ? "selected" : ""}`}
        >
          Reports
        </NavLink>
        <NavLink
          to="/tools"
          className={`nav-item ${currentPath === "tools" ? "selected" : ""}`}
        >
          Tools
        </NavLink>
        <NavLink
          to="/dispatching"
          className={`nav-item ${
            currentPath === "dispatching" ? "selected" : ""
          }`}
        >
          Dispatching
        </NavLink>
        <NavLink
          to="/invoices"
          className={`nav-item ${currentPath === "invoices" ? "selected" : ""}`}
        >
          Invoices
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
