// Imports
import { CSSProperties } from "react";
import styles from "./Segments.module.css";

// Parameters Interface
interface SegmentsParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function Segments({
  className = "",
  style = {},
}: SegmentsParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style
  }

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      Segments
    </div>
  );
}