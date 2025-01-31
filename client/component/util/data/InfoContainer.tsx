// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./InfoContainer.module.css";
import Text from "../text/Text";

// Parameters Interface
interface InfoContainerParameters {
  className?: string;
  style?: CSSProperties;
  title: string;
  description: string;
  children?: ReactNode;
}

// Export Component
export default function InfoContainer({
  className = "",
  style = {},
  title,
  description,
  children = <></>,
}: InfoContainerParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <Text size="medium-large">{title}</Text>
      <Text size="small">{description}</Text>
      {children}
    </div>
  );
}
