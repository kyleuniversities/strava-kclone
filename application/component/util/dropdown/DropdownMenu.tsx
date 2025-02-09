// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./DropdownMenu.module.css";

// Parameters Interface
interface DropdownMenuParameters {
  className?: string;
  style?: CSSProperties;
  dropdownId: string;
  maxHeight?: number | string;
  children: ReactNode;
}

// Export Component
export default function DropdownMenu({
  className = "",
  style = {},
  dropdownId,
  maxHeight,
  children,
}: DropdownMenuParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    maxHeight,
  };

  // Return Component
  return (
    <div
      id={`${dropdownId}-menu`}
      className={`${styles["container"]} ${className} dropdown-menu dropdown-hide`}
      style={containerStyle}
    >
      {children}
    </div>
  );
}
