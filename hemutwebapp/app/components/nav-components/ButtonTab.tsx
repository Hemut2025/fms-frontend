"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./ButtonTab.css";

type ButtonProps = {
  children?: React.ReactNode;
  href: string;
  isSelected?: boolean;
  icon?: React.ComponentType;
  iconType?: "fill" | "stroke";
};

const ButtonTab = ({ href, children, icon: Icon, iconType }: ButtonProps) => {
  const pathname = usePathname();
  const isSelected = pathname === href;

  return (
    <Link href={href} className={`nav-item ${isSelected ? "selected" : ""}`}>
      <div className="container">
        <div className={`tab-icon ${iconType}-icon`}>{Icon && <Icon />}</div>
        {children}
      </div>
    </Link>
  );
};

export default ButtonTab;
