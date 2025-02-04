// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./LinkSpan.module.css";
import Link from "next/link";

// Parameters Interface
interface LinkSpanParameters {
  className?: string;
  style?: CSSProperties;
  colorScheme?: string;
  href: string;
  children: ReactNode;
}

// Export Component
export default function LinkSpan({
  className = "",
  style = {},
  colorScheme = "default",
  href,
  children,
}: LinkSpanParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <Link
      href={href}
      className={`${styles["content"]} ${className} ${styles[`color-scheme-${colorScheme}`]}`}
      style={containerStyle}
    >
      {children}
    </Link>
  );
}
