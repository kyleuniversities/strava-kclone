// Imports
import { CSSProperties } from "react";
import styles from "./SiteLogo.module.css";

// Parameters Interface
interface SiteLogoParameters {
  className?: string;
  style?: CSSProperties;
  colorScheme?: string;
}

// Export Component
export default function SiteLogo({
  className = "",
  style = {},
  colorScheme = "default",
}: SiteLogoParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} ${styles[`color-scheme-${colorScheme}`]}`}
      style={containerStyle}
    >
      STRAVA
    </div>
  );
}
