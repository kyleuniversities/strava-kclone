// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./FloatRightContainer.module.css";

// Parameters Interface
interface FloatRightContainerParameters {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// Export Component
export default function FloatRightContainer({
  className = "",
  style = {},
  children,
}: FloatRightContainerParameters) {
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
