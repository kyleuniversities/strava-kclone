// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./SitePage.module.css";
import SiteHeader from "../header/SiteHeader";
import SiteFooter from "../footer/SiteFooter";

// Parameters Interface
interface SitePageParameters {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// Export Component
export default function SitePage({
  className = "",
  style = {},
  children,
}: SitePageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}`}
      style={containerStyle}
    >
      <SiteHeader />
      <div className={styles["content"]}>{children}</div>
      <SiteFooter />
    </div>
  );
}
