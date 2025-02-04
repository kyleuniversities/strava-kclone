// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./TextTabPanel.module.css";
import SiteMultiTabPanel from "./SiteMultiTabPanel";

// Parameters Interface
interface TextTabPanelParameters {
  className?: string;
  style?: CSSProperties;
  tabs: ReactNode[];
  children: ReactNode[];
}

// Export Component
export default function TextTabPanel({
  className = "",
  style = {},
  tabs,
  children,
}: TextTabPanelParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // XML Sub Component Functions
  const tabFunction = (index: number, isActive: boolean) => (
    <div
      className={`${styles["tab-cap"]} ${styles[isActive ? "active" : "inactive"]}`}
    >
      <div>{tabs[index]}</div>
    </div>
  );

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <SiteMultiTabPanel tabFunction={tabFunction}>
        {children}
      </SiteMultiTabPanel>
    </div>
  );
}
