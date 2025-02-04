// Imports
import { CSSProperties } from "react";
import styles from "./TrainingCalendarPage.module.css";

// Parameters Interface
interface TrainingCalendarPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TrainingCalendarPage({
  className = "",
  style = {},
}: TrainingCalendarPageParameters) {
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
      TrainingCalendarPage
    </div>
  );
}