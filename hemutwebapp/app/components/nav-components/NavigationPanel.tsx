"use client";

import React, { useState } from "react";
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
import HemutLogo from "@/app/assets/HemutLogo";

const NavigationPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
    document.querySelector(".main-content")?.classList.toggle("expanded");
  };

  return (
    <>
      <div className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
        <div className="nav-header">
          <HemutLogo isCollapsed={isCollapsed} color="#FDDA0D" width="100" />
        </div>

        <button className="toggle-btn" onClick={toggleNav}>
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronRight : faChevronLeft}
          />
        </button>
        <nav>
          <ButtonTab href="/dashboard" icon={TruckIcon} iconType="stroke">
            Dashboard
          </ButtonTab>

          <ButtonTab href="/loads" icon={TruckIcon} iconType="stroke">
            Loads
          </ButtonTab>

          <ButtonTab href="/accounting" icon={ActivityIcon} iconType="fill">
            Accounting
          </ButtonTab>

          <ButtonTab href="/maintenance" icon={MaintenanceIcon} iconType="fill">
            Maintenance
          </ButtonTab>

          <ButtonTab href="/reports" icon={ReportsIcon} iconType="fill">
            Reports
          </ButtonTab>
        </nav>
        {/* <div style={{ height: "5rem" }} /> */}
        <nav className="bottom">
          <ButtonTab href="/settings" icon={SettingsIcon} iconType="stroke">
            Settings
          </ButtonTab>
          <ButtonTab href="/logout" icon={LogoutIcon} iconType="stroke">
            Log Out
          </ButtonTab>
        </nav>
      </div>
    </>
  );
};

export default NavigationPanel;
