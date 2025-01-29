// Imports
import { CSSProperties } from "react";
import styles from "./SegmentsPage.module.css";

// Parameters Interface
interface SegmentsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SegmentsPage({
  className = "",
  style = {},
}: SegmentsPageParameters) {
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
      SegmentsPage
    </div>
  );
}