// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";
import OptionalLink from "../optional/OptionalLink";

// Parameters Interface
interface ButtonParameters {
  className?: string;
  style?: CSSProperties;
  variant?: string;
  colorScheme?: string;
  to?: string;
  children: ReactNode;
}

// Export Component
export default function Button({
  className = "",
  style = {},
  variant = "default",
  colorScheme = "default",
  to = "",
  children,
}: ButtonParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <OptionalLink
      className={`${styles["container"]} ${className} ${styles[`variant-${variant}`]} ${styles[`color-scheme-${colorScheme}`]} flex-center flex-column`}
      style={containerStyle}
      to={to}
    >
      {children}
    </OptionalLink>
  );
}
