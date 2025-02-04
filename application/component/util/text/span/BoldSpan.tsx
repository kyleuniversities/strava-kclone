// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./BoldSpan.module.css";

// Parameters Interface
interface BoldSpanParameters {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// Export Component
export default function BoldSpan({
  className = "",
  style = {},
  children,
}: BoldSpanParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <span
      className={`${styles["content"]} ${className}`}
      style={containerStyle}
    >
      {children}
    </span>
  );
}
