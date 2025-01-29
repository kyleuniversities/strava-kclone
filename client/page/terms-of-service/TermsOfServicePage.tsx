// Imports
import { CSSProperties } from "react";
import styles from "./TermsOfServicePage.module.css";

// Parameters Interface
interface TermsOfServicePageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TermsOfServicePage({
  className = "",
  style = {},
}: TermsOfServicePageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style
  }

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{className}}}`}
      style={containerStyle}
    >
      TermsOfServicePage
    </div>
  );
}