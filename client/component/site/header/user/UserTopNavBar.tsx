// Imports
import { CSSProperties } from "react";
import styles from "./UserTopNavBar.module.css";

// Parameters Interface
interface UserTopNavBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserTopNavBar({
  className = "",
  style = {},
}: UserTopNavBarParameters) {
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
      <div className={styles["nav-item"]}>Dashboard</div>
      <div className={styles["nav-item"]}>Training</div>
      <div className={styles["nav-item"]}>Maps</div>
      <div className={styles["nav-item"]}>Challenges</div>
    </div>
  );
}
