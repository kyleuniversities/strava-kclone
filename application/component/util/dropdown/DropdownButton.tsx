// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./DropdownButton.module.css";

// Parameters Interface
interface DropdownButtonParameters {
  className?: string;
  style?: CSSProperties;
  dropdownId: string;
  children: ReactNode;
}

// Export Component
export default function DropdownButton({
  className = "",
  style = {},
  dropdownId,
  children,
}: DropdownButtonParameters) {
  // Handler Methods
  const toggleDropdown = () => {
    const menuId = `${dropdownId}-menu`;
    const dropdownElement: HTMLElement = document.getElementById(
      menuId,
    ) as HTMLElement;
    if (dropdownElement) {
      dropdownElement.classList.toggle("dropdown-show");
      dropdownElement.classList.toggle("dropdown-hide");
    }
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      id={`${dropdownId}-button`}
      className={`${styles["container"]} ${className} dropdown-button`}
      style={containerStyle}
      onClick={toggleDropdown}
    >
      {children}
    </div>
  );
}
