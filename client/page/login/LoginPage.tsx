// Imports
import { CSSProperties } from "react";
import styles from "./LoginPage.module.css";

// Parameters Interface
interface LoginPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LoginPage({
  className = "",
  style = {},
}: LoginPageParameters) {
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
      LoginPage
    </div>
  );
}