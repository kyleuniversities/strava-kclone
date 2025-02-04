// Imports
import { CSSProperties } from "react";
import styles from "./TopNavBar.module.css";

// Parameters Interface
interface TopNavBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function TopNavBar({
  className = "",
  style = {},
}: TopNavBarParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} flex`}
      style={containerStyle}
    >
      <div className={styles["nav-item"]}>Activities</div>
      <div className={styles["nav-item"]}>Features</div>
      <div className={styles["nav-item"]}>Maps</div>
      <div className={styles["nav-item"]}>Challenges</div>
      <div className={styles["nav-item"]}>Subscription</div>
    </div>
  );
}
