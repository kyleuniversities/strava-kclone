// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./LabeledButton.module.css";
import Button from "../../button/Button";
import LabeledComponent from "../../label/LabeledComponent";

// Parameters Interface
interface LabeledButtonParameters {
  className?: string;
  style?: CSSProperties;
  labelText: string;
  variant?: string;
  colorScheme?: string;
  to?: string;
  children: ReactNode;
}

// Export Component
export default function LabeledButton({
  className = "",
  style = {},
  labelText,
  variant = "default",
  colorScheme = "default",
  to,
  children,
}: LabeledButtonParameters) {
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <Button variant={variant} colorScheme={colorScheme} to={to}>
        {children}
      </Button>
    </LabeledComponent>
  );
}
