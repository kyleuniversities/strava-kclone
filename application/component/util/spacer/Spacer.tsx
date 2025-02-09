// Imports
import { CSSProperties } from "react";
import styles from "./Spacer.module.css";

// Parameters Interface
interface SpacerParameters {
  className?: string;
  style?: CSSProperties;
  size: number | string;
}

// Export Component
export default function Spacer({
  className = "",
  style = {},
  size = 1,
}: SpacerParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    //
    // border: "1px solid green",
    //
    height: size,
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
