// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./GridContainer.module.css";

// Parameters Interface
interface GridContainerParameters {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// Export Component
export default function GridContainer({
  className = "",
  style = {},
  children,
}: GridContainerParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
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
