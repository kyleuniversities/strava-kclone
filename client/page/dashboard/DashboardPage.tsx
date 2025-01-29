// Imports
import { CSSProperties } from "react";
import styles from "./DashboardPage.module.css";

// Parameters Interface
interface DashboardPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function DashboardPage({
  className = "",
  style = {},
}: DashboardPageParameters) {
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
      DashboardPage
    </div>
  );
}