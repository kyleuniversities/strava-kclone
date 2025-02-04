// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./IconTabPanel.module.css";
import SiteMultiTabPanel from "./SiteMultiTabPanel";
import SvgIcon from "@/component/util/svg/SvgIcon";

// Parameters Interface
interface IconTabPanelParameters {
  className?: string;
  style?: CSSProperties;
  tabs: ReactNode[];
  children: ReactNode[];
}

// Export Component
export default function IconTabPanel({
  className = "",
  style = {},
  tabs,
  children,
}: IconTabPanelParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // XML Sub Component Functions
  const tabFunction = (index: number, isActive: boolean) => (
    <div className={`${styles["tab-cap"]} ${styles[isActive ? "active" : ""]}`}>
      <SvgIcon size={24}>{tabs[index]}</SvgIcon>
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
