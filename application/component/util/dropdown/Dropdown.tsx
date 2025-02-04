// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode, useState } from "react";
import styles from "./Dropdown.module.css";
import { hideDropdownMenusExcept } from "@/utility/dropdown";

// Parameters Interface
interface DropdownParameters {
  className?: string;
  style?: CSSProperties;
  dropdownId: string;
  children: ReactNode;
}

// Export Component
export default function Dropdown({
  className = "",
  style = {},
  dropdownId,
  children,
}: DropdownParameters) {
  // Constants
  const menuId = `${dropdownId}-menu`;

  // Script Functions
  const getDropdownId = (parent: HTMLElement) => {
    const parentId = parent.id;
    if (parent.classList.contains("dropdown-button")) {
      return parentId.substring(0, parentId.lastIndexOf("-button"));
    }
    return parentId.substring(0, parentId.lastIndexOf("-menu"));
  };

  // Scripts
  window.onclick = (event) => {
    let target = event.target;
    let parent: HTMLElement = target as HTMLElement;
    let retainedMenuId: string = "";
    do {
      if (
        parent.classList.contains("dropdown-button") ||
        parent.classList.contains("dropdown-menu")
      ) {
        const dropdownId = getDropdownId(parent);
        retainedMenuId = `${dropdownId}-menu`;
        break;
      }
      parent = parent.parentNode as HTMLElement;
    } while (parent && parent.parentNode);
    hideDropdownMenusExcept(retainedMenuId);
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} flex`}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
