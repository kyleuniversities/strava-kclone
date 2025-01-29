// Imports
import { CSSProperties } from "react";
import styles from "./RoutesPage.module.css";

// Parameters Interface
interface RoutesPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function RoutesPage({
  className = "",
  style = {},
}: RoutesPageParameters) {
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
      RoutesPage
    </div>
  );
}