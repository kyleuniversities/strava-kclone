// Imports
import { CSSProperties } from "react";
import styles from "./GoalsPage.module.css";

// Parameters Interface
interface GoalsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GoalsPage({
  className = "",
  style = {},
}: GoalsPageParameters) {
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
      GoalsPage
    </div>
  );
}