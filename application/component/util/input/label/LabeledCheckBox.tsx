// Imports
import { CSSProperties } from "react";
import styles from "./LabeledCheckBox.module.css";
import LabeledComponent from "../../label/LabeledComponent";
import SidePadder from "../../spacer/SidePadder";

// Parameters Interface
interface LabeledCheckBoxParameters {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  labelText: string;
  checkboxId: string;
  subLabelText: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

// Export Component
export default function LabeledCheckBox({
  className = "",
  style = {},
  width,
  labelText,
  checkboxId,
  subLabelText,
  checked,
  setChecked,
}: LabeledCheckBoxParameters) {
  // XML Parameters
  const inputStyle: CSSProperties = {
    width,
  };

  // Return Component
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <div className="flex">
        <input
          id={checkboxId}
          className={`${styles["container"]}`}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <SidePadder size={10} />
        <label htmlFor={checkboxId}>{subLabelText}</label>
      </div>
    </LabeledComponent>
  );
}
