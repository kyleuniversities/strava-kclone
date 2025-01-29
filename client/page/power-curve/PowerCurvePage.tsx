// Imports
import { CSSProperties } from "react";
import styles from "./PowerCurvePage.module.css";

// Parameters Interface
interface PowerCurvePageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function PowerCurvePage({
  className = "",
  style = {},
}: PowerCurvePageParameters) {
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
      PowerCurvePage
    </div>
  );
}