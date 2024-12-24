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
  const [selectedTab, setSelectedTab] = useState("");

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
    document.querySelector(".main-content")?.classList.toggle("expanded");
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
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
            selectedTab === "dashboard" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("dashboard")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/loads"
          className={`nav-item ${selectedTab === "loads" ? "selected" : ""}`}
          onClick={() => handleTabClick("loads")}
        >
          Loads
        </NavLink>
        <NavLink
          to="/accounting"
          className={`nav-item ${
            selectedTab === "accounting" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("accounting")}
        >
          Accounting
        </NavLink>
        <NavLink
          to="/maintenance"
          className={`nav-item ${
            selectedTab === "maintenance" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("maintenance")}
        >
          Maintenance
        </NavLink>
        <NavLink
          to="/reports"
          className={`nav-item ${selectedTab === "reports" ? "selected" : ""}`}
          onClick={() => handleTabClick("reports")}
        >
          Reports
        </NavLink>
        <NavLink
          to="/tools"
          className={`nav-item ${selectedTab === "tools" ? "selected" : ""}`}
          onClick={() => handleTabClick("tools")}
        >
          Tools
        </NavLink>
        <NavLink
          to="/dispatching"
          className={`nav-item ${
            selectedTab === "dispatching" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("dispatching")}
        >
          Dispatching
        </NavLink>
        <NavLink
          to="/invoices"
          className={`nav-item ${selectedTab === "invoices" ? "selected" : ""}`}
          onClick={() => handleTabClick("invoices")}
        >
          Invoices
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
