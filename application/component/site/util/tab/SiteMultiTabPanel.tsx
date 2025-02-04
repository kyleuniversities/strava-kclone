// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode, useState } from "react";
import styles from "./SiteMultiTabPanel.module.css";

// Parameters Interface
interface MultiTabPanelParameters {
  className?: string;
  style?: CSSProperties;
  tabFunction: (index: number, isActive: boolean) => ReactNode;
  children: ReactNode[];
}

// Export Component
export default function SiteMultiTabPanel({
  className = "",
  style = {},
  tabFunction,
  children,
}: MultiTabPanelParameters) {
  // Use State Constants
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // XML Functions
  const getActiveClassName = (index: number) => {
    if (activeIndex === index) {
      return "active";
    }
    return "inactive";
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <div className={`${styles["tab-cap-list"]} flex`}>
        {children.map((_: ReactNode, index: number) => (
          <div
            className={`${styles["tab-cap"]} ${styles[getActiveClassName(index)]}`}
            onClick={() => setActiveIndex(index)}
          >
            {tabFunction(index, activeIndex === index)}
          </div>
        ))}
      </div>
      <div className={`${styles["tab-container"]}`}>
        {children[activeIndex]}
      </div>
    </div>
  );
}
