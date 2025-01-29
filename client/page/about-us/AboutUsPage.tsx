// Imports
import { CSSProperties } from "react";
import styles from "./AboutUsPage.module.css";

// Parameters Interface
interface AboutUsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function AboutUsPage({
  className = "",
  style = {},
}: AboutUsPageParameters) {
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
      AboutUsPage
    </div>
  );
}