// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";
import { ContainerElement } from "../type/Container";
import DivElement from "@/component/wrapper/DivElement";
import LinkElement from "@/component/wrapper/LinkElement";
import OptionalLink from "../optional/OptionalLink";

// Parameters Interface
interface ButtonParameters {
  className?: string;
  style?: CSSProperties;
  colorScheme?: string;
  to?: string;
  children: ReactNode;
}

// Export Component
export default function Button({
  className = "",
  style = {},
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
      className={`${styles["container"]} ${{ className }} ${styles[`color-scheme-${colorScheme}`]}`}
      style={containerStyle}
      to={to}
    >
      {children}
    </OptionalLink>
  );
}
