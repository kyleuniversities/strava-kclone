// Imports
import { CSSProperties } from "react";
import styles from "./TrainingLogPage.module.css";

// Parameters Interface
interface TrainingLogPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TrainingLogPage({
  className = "",
  style = {},
}: TrainingLogPageParameters) {
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
      TrainingLogPage
    </div>
  );
}