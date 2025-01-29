// Imports
import { CSSProperties } from "react";
import styles from "./HeatMapPage.module.css";

// Parameters Interface
interface HeatMapPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function HeatMapPage({
  className = "",
  style = {},
}: HeatMapPageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style
  }

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{className}}}`}
      style={containerStyle}
    >
      HeatMapPage
    </div>
  );
}