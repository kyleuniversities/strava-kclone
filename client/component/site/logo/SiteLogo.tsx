// Imports
import { CSSProperties } from "react";
import styles from "./SiteLogo.module.css";

// Parameters Interface
interface SiteLogoParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SiteLogo({
  className = "",
  style = {},
}: SiteLogoParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      STRAVA
    </div>
  );
}
