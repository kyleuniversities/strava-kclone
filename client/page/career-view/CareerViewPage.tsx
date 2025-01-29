// Imports
import { CSSProperties } from "react";
import styles from "./CareerViewPage.module.css";

// Parameters Interface
interface CareerViewPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function CareerViewPage({
  className = "",
  style = {},
}: CareerViewPageParameters) {
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
      CareerViewPage
    </div>
  );
}