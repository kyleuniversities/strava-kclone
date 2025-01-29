// Imports
import { CSSProperties } from "react";
import styles from "./FeaturesPage.module.css";

// Parameters Interface
interface FeaturesPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function FeaturesPage({
  className = "",
  style = {},
}: FeaturesPageParameters) {
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
      FeaturesPage
    </div>
  );
}