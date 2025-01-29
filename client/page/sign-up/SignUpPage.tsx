// Imports
import { CSSProperties } from "react";
import styles from "./SignUpPage.module.css";

// Parameters Interface
interface SignUpPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SignUpPage({
  className = "",
  style = {},
}: SignUpPageParameters) {
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
      SignUpPage
    </div>
  );
}