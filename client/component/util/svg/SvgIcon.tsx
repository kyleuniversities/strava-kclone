// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./SvgIcon.module.css";

// Parameters Interface
interface SvgIconParameters {
  className?: string;
  style?: CSSProperties;
  size?: number;
  children: ReactNode;
}

// Export Component
export default function SvgIcon({
  className = "",
  style = {},
  size = 16,
  children,
}: SvgIconParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
      viewBox="0 0 16 16"
    >
      {children}
    </svg>
  );
}
