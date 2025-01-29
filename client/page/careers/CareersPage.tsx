// Imports
import { CSSProperties } from "react";
import styles from "./CareersPage.module.css";

// Parameters Interface
interface CareersPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function CareersPage({
  className = "",
  style = {},
}: CareersPageParameters) {
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
      CareersPage
    </div>
  );
}