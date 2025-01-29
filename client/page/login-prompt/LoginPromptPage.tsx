// Imports
import { CSSProperties } from "react";
import styles from "./LoginPromptPage.module.css";

// Parameters Interface
interface LoginPromptPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LoginPromptPage({
  className = "",
  style = {},
}: LoginPromptPageParameters) {
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
      LoginPromptPage
    </div>
  );
}