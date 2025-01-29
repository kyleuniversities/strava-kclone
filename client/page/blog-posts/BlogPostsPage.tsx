// Imports
import { CSSProperties } from "react";
import styles from "./BlogPostsPage.module.css";

// Parameters Interface
interface BlogPostsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function BlogPostsPage({
  className = "",
  style = {},
}: BlogPostsPageParameters) {
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
      BlogPostsPage
    </div>
  );
}