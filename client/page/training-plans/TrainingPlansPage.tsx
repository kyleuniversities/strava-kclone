// Imports
import { CSSProperties } from "react";
import styles from "./TrainingPlansPage.module.css";

// Parameters Interface
interface TrainingPlansPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TrainingPlansPage({
  className = "",
  style = {},
}: TrainingPlansPageParameters) {
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
      TrainingPlansPage
    </div>
  );
}