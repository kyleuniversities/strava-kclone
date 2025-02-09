// Imports
import { CSSProperties } from "react";
import styles from "./LabeledTextArea.module.css";
import LabeledComponent from "../../label/LabeledComponent";

// Parameters Interface
interface LabeledTextAreaParameters {
  className?: string;
  style?: CSSProperties;
  labelText: string;
  value: string;
  setValue: (text: string) => void;
}

// Export Component
export default function LabeledTextArea({
  className = "",
  style = {},
  labelText,
  value,
  setValue,
}: LabeledTextAreaParameters) {
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <textarea
        className={`${styles["container"]}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </LabeledComponent>
  );
}
