// Imports
import { CSSProperties } from "react";
import styles from "./EngagementSection.module.css";
import GetStartedBox from "./get-started/GetStartedBox";

// Parameters Interface
interface EngagementSectionParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function EngagementSection({
  className = "",
  style = {},
}: EngagementSectionParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      <GetStartedBox />
    </div>
  );
}
