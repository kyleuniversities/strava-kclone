// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Text.module.css";

// Parameters Interface
interface TextParameters {
  className?: string;
  style?: CSSProperties;
  size?: string;
  children: ReactNode;
}

// Export Component
export default function Text({
  className = "",
  style = {},
  size = "small",
  children,
}: TextParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} ${styles[size]}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
