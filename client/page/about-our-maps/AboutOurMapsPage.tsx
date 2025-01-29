// Imports
import { CSSProperties } from "react";
import styles from "./AboutOurMapsPage.module.css";

// Parameters Interface
interface AboutOurMapsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function AboutOurMapsPage({
  className = "",
  style = {},
}: AboutOurMapsPageParameters) {
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
      AboutOurMapsPage
    </div>
  );
}