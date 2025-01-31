// Imports
import { CSSProperties } from "react";
import styles from "./SocialSection.module.css";

// Parameters Interface
interface SocialSectionParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SocialSection({
  className = "",
  style = {},
}: SocialSectionParameters) {
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
      SocialSection
    </div>
  );
}