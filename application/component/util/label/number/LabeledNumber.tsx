// Imports
import { CSSProperties } from "react";
import styles from "./LabeledNumber.module.css";
import Text from "../../text/Text";
import Spacer from "../../spacer/Spacer";

// Parameters Interface
interface LabeledNumberParameters {
  className?: string;
  style?: CSSProperties;
  label: string;
  number: number;
}

// Export Component
export default function LabeledNumber({
  className = "",
  style = {},
  label,
  number,
}: LabeledNumberParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} text-align-center flex-center flex-column`}
      style={containerStyle}
    >
      <Text size="small">{label}</Text>
      <Text size="large">{number}</Text>
    </div>
  );
}
