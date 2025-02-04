// Use Client
"use client";

// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";
import OptionalLink from "../optional/OptionalLink";

// Parameters Interface
interface ButtonParameters {
  id?: string;
  className?: string;
  style?: CSSProperties;
  variant?: string;
  colorScheme?: string;
  to?: string;
  onClick?: () => void;
  children: ReactNode;
}

// Export Component
export default function Button({
  id,
  className = "",
  style = {},
  variant = "default",
  colorScheme = "default",
  to = "",
  onClick = () => {},
  children,
}: ButtonParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <OptionalLink
      id={id}
      className={`${styles["container"]} ${className} ${styles[`variant-${variant}`]} ${styles[`color-scheme-${colorScheme}`]} flex-center flex-column`}
      style={containerStyle}
      to={to}
      onClick={onClick}
    >
      {children}
    </OptionalLink>
  );
}
