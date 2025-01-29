// Imports
import { CSSProperties } from "react";
import styles from "./ChallengeViewPage.module.css";

// Parameters Interface
interface ChallengeViewPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ChallengeViewPage({
  className = "",
  style = {},
}: ChallengeViewPageParameters) {
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
      ChallengeViewPage
    </div>
  );
}