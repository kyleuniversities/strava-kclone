// Imports
import { CSSProperties } from "react";
import styles from "./LabeledText.module.css";
import LabeledComponent from "../../label/LabeledComponent";

// Parameters Interface
interface LabeledTextParameters {
  id?: string;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  labelText: string;
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
}

// Export Component
export default function LabeledText({
  id,
  className = "",
  style = {},
  width,
  labelText,
  placeholder,
  value,
}: LabeledTextParameters) {
  // XML Parameters
  const textStyle: CSSProperties = {
    width,
  };

  // Return Component
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <div id={id} className={`${styles["container"]}`} style={textStyle}>
        {value ? (
          <span>{value}</span>
        ) : (
          <span className={`${styles["placeholder"]}`}>{placeholder}</span>
        )}
      </div>
    </LabeledComponent>
  );
}
