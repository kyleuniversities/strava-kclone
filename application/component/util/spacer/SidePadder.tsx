// Imports
import { CSSProperties } from "react";
import styles from "./SidePadder.module.css";

// Parameters Interface
interface SidePadderParameters {
  className?: string;
  style?: CSSProperties;
  size: number | string;
}

// Export Component
export default function SidePadder({
  className = "",
  style = {},
  size = 1,
}: SidePadderParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    //
    // border: "1px solid green",
    //
    width: size,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      &nbsp;
    </div>
  );
}
