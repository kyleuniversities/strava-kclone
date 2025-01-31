// Imports
import { CSSProperties } from "react";
import styles from "./LabeledDropdown.module.css";
import LabeledComponent from "../../label/LabeledComponent";
import SiteDropdown from "@/component/site/util/dropdown/SiteDropdown";
import { SiteDropdownData } from "@/component/site/util/dropdown/types";

// Parameters Interface
interface LabeledDropdownParameters {
  className?: string;
  style?: CSSProperties;
  maxHeight?: number | string;
  nodePadding?: number | string;
  labelText: string;
  value: string;
  setValue: (text: string) => void;
  dropdownData: SiteDropdownData;
}

// Export Component
export default function LabeledDropdown({
  className = "",
  style = {},
  maxHeight = "90vh",
  nodePadding = 20,
  labelText,
  value,
  setValue,
  dropdownData,
}: LabeledDropdownParameters) {
  return (
    <LabeledComponent className={className} style={style} labelText={labelText}>
      <SiteDropdown
        currentTitle={value}
        onSelect={setValue}
        dropdownData={dropdownData}
        maxHeight={maxHeight}
        nodePadding={nodePadding}
      />
    </LabeledComponent>
  );
}
