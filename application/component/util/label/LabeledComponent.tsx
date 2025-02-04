// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./LabeledComponent.module.css";
import Text from "../text/Text";

// Parameters Interface
interface LabeledComponentParameters {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  labelText: string;
  size?: string;
  children: ReactNode;
}

// Export Component
export default function LabeledComponent({
  className = "",
  style = {},
  width,
  labelText,
  size = "medium-small",
  children,
}: LabeledComponentParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    width,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <Text size={size}>
        {labelText.length > 0 && labelText.trim().length === 0 ? (
          <>&nbsp;</>
        ) : (
          <>{labelText}</>
        )}
      </Text>
      {children}
    </div>
  );
}
