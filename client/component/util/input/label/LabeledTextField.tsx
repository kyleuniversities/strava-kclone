// Imports
import { CSSProperties } from "react";
import styles from "./LabeledTextField.module.css";
import LabeledComponent from "../../label/LabeledComponent";

// Parameters Interface
interface LabeledTextFieldParameters {
  className?: string;
  style?: CSSProperties;
  labelText: string;
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
}

// Export Component
export default function LabeledTextField({
  className = "",
  style = {},
  labelText,
  placeholder,
  value,
  setValue,
}: LabeledTextFieldParameters) {
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <input
        className={`${styles["container"]}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </LabeledComponent>
  );
}
