// Imports
import { CSSProperties } from "react";
import styles from "./ArticlePage.module.css";

// Parameters Interface
interface ArticlePageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ArticlePage({
  className = "",
  style = {},
}: ArticlePageParameters) {
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
      ArticlePage
    </div>
  );
}