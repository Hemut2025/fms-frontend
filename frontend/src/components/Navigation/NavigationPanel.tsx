import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./NavigationPanel.css";
import TruckIcon from "../../assets/TruckIcon";
import ReportsIcon from "../../assets/ReportsIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import MaintenanceIcon from "../../assets/MaintenanceIcon";
import ActivityIcon from "../../assets/ActivityIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import ButtonTab from "./ButtonTab";

const NavigationPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.substring(1).toLowerCase();

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
    document.querySelector(".main-content")?.classList.toggle("expanded");
  };

  return (
    <div className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <img className="logo" src={"/hemutlogo.png"} alt="logo" />
      <button className="toggle-btn" onClick={toggleNav}>
        <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
      </button>

      <nav>
        <ButtonTab
          to="/dashboard"
          isSelected={currentPath === "dashboard"}
          icon={TruckIcon}
          iconType="stroke"
        >
          Dashboard
        </ButtonTab>

        <ButtonTab
          to="/loads"
          isSelected={currentPath === "loads"}
          icon={TruckIcon}
          iconType="stroke"
        >
          Loads
        </ButtonTab>

        <ButtonTab
          to="/accounting"
          isSelected={currentPath === "accounting"}
          icon={ActivityIcon}
          iconType="fill"
        >
          Accounting
        </ButtonTab>

        <ButtonTab
          to="/maintenance"
          isSelected={currentPath === "maintenance"}
          icon={MaintenanceIcon}
          iconType="fill"
        >
          Maintenance
        </ButtonTab>

        <ButtonTab
          to="/reports"
          isSelected={currentPath === "reports"}
          icon={ReportsIcon}
          iconType="fill"
        >
          Reports
        </ButtonTab>
        <div style={{ height: "8rem" }} />

        <ButtonTab
          to="/settings"
          isSelected={currentPath === "settings"}
          icon={SettingsIcon}
          iconType="stroke"
        >
          Settings
        </ButtonTab>
        <ButtonTab
          to="/logout"
          isSelected={currentPath === "logout"}
          icon={LogoutIcon}
          iconType="stroke"
        >
          Log Out
        </ButtonTab>
      </nav>
    </div>
  );
};

export default NavigationPanel;
