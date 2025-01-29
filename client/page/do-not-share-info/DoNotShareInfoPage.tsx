// Imports
import { CSSProperties } from "react";
import styles from "./DoNotShareInfoPage.module.css";

// Parameters Interface
interface DoNotShareInfoPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function DoNotShareInfoPage({
  className = "",
  style = {},
}: DoNotShareInfoPageParameters) {
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
      DoNotShareInfoPage
    </div>
  );
}