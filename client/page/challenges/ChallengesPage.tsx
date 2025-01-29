// Imports
import { CSSProperties } from "react";
import styles from "./ChallengesPage.module.css";

// Parameters Interface
interface ChallengesPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ChallengesPage({
  className = "",
  style = {},
}: ChallengesPageParameters) {
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
      ChallengesPage
    </div>
  );
}