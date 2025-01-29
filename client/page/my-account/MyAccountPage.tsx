// Imports
import { CSSProperties } from "react";
import styles from "./MyAccountPage.module.css";

// Parameters Interface
interface MyAccountPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function MyAccountPage({
  className = "",
  style = {},
}: MyAccountPageParameters) {
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
      MyAccountPage
    </div>
  );
}