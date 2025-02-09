// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./GridComponent.module.css";

// Parameters Interface
interface GridComponentParameters {
  className?: string;
  style?: CSSProperties;
  position?: "static" | "absolute";
  gridRow?: number;
  gridColumn?: number;
  zIndex?: number;
  children: ReactNode;
}

// Export Component
export default function GridComponent({
  className = "",
  style = {},
  position = "static",
  gridRow = 1,
  gridColumn = 1,
  zIndex = 0,
  children,
}: GridComponentParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    position,
    gridRow,
    gridColumn,
    zIndex,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
