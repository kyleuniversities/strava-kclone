// Imports
import { CSSProperties } from "react";
import styles from "./FreeAppBox.module.css";

// Parameters Interface
interface FreeAppBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function FreeAppBox({
  className = "",
  style = {},
}: FreeAppBoxParameters) {
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
      FreeAppBox
    </div>
  );
}