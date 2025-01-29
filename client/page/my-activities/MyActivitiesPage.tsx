// Imports
import { CSSProperties } from "react";
import styles from "./MyActivitiesPage.module.css";

// Parameters Interface
interface MyActivitiesPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MyActivitiesPage({
  className = "",
  style = {},
}: MyActivitiesPageParameters) {
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
      MyActivitiesPage
    </div>
  );
}