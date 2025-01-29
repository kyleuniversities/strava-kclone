// Imports
import { CSSProperties } from "react";
import styles from "./WhatsNewPage.module.css";

// Parameters Interface
interface WhatsNewPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function WhatsNewPage({
  className = "",
  style = {},
}: WhatsNewPageParameters) {
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
      WhatsNewPage
    </div>
  );
}