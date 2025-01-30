// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

// Parameters Interface
interface ButtonParameters {
  className?: string;
  style?: CSSProperties;
  colorScheme?: string;
  children: ReactNode;
}

// Export Component
export default function Button({
  className = "",
  style = {},
  colorScheme = "default",
  children,
}: ButtonParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }} ${styles[`color-scheme-${colorScheme}`]}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
