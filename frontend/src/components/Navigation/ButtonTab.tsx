import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonTab.css";

type ButtonProps = {
  children?: React.ReactNode;
  to: string;
  isSelected?: boolean;
  icon?: React.ReactNode;
  iconType?: "fill" | "stroke";
};
const ButtonTab = ({
  to,
  isSelected,
  children,
  icon: Icon,
  iconType,
}: ButtonProps) => {
  return (
    <NavLink to={to} className={`nav-item ${isSelected ? "selected" : ""}`}>
      <div className="container">
        <div className={`tab-icon ${iconType}-icon`}>{Icon && <Icon />}</div>
        {children}
      </div>
    </NavLink>
  );
};

export default ButtonTab;
