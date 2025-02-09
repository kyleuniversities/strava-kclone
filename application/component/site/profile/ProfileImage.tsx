// Imports
import { CSSProperties } from "react";
import styles from "./ProfileImage.module.css";

// Parameters Interface
interface ProfileImageParameters {
  className?: string;
  style?: CSSProperties;
  size?: number | string;
}

// Export Component
export default function ProfileImage({
  className = "",
  style = {},
  size = 40,
}: ProfileImageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    width: size,
  };

  // Return Component
  return (
    <img
      className={`${styles["profile-pic"]}`}
      src="/props/profile-pic-example.png"
      style={containerStyle}
    />
  );
}
