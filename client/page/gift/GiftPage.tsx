// Imports
import { CSSProperties } from "react";
import styles from "./GiftPage.module.css";

// Parameters Interface
interface GiftPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GiftPage({
  className = "",
  style = {},
}: GiftPageParameters) {
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
      GiftPage
    </div>
  );
}