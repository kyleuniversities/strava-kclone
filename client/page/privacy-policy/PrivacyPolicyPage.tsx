// Imports
import { CSSProperties } from "react";
import styles from "./PrivacyPolicyPage.module.css";

// Parameters Interface
interface PrivacyPolicyPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function PrivacyPolicyPage({
  className = "",
  style = {},
}: PrivacyPolicyPageParameters) {
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
      PrivacyPolicyPage
    </div>
  );
}