// Imports
import { CSSProperties } from "react";
import styles from "./ClubsSearchPage.module.css";

// Parameters Interface
interface ClubsSearchPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ClubsSearchPage({
  className = "",
  style = {},
}: ClubsSearchPageParameters) {
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
      ClubsSearchPage
    </div>
  );
}