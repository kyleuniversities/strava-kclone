// Imports
import { CSSProperties } from "react";
import styles from "./LabeledTextField.module.css";
import LabeledComponent from "../../label/LabeledComponent";

// Parameters Interface
interface LabeledTextFieldParameters {
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
export default function LabeledTextField({
  id,
  className = "",
  style = {},
  width,
  labelText,
  placeholder,
  value,
  setValue,
}: LabeledTextFieldParameters) {
  // XML Parameters
  const inputStyle: CSSProperties = {
    width,
  };

  // Return Component
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <input
        id={id}
        className={`${styles["container"]}`}
        style={inputStyle}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </LabeledComponent>
  );
}
