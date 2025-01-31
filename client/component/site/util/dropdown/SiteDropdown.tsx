// Imports
import { CSSProperties } from "react";
import styles from "./SiteDropdown.module.css";
import Dropdown from "@/component/util/dropdown/Dropdown";
import DropdownButton from "@/component/util/dropdown/DropdownButton";
import SidePadder from "@/component/util/spacer/SidePadder";
import SvgIcon from "@/component/util/svg/SvgIcon";
import DropdownMenu from "@/component/util/dropdown/DropdownMenu";
import { CHEVRON_DOWN_SVG_PATH } from "@/resource/svg";
import {
  SiteDropdownData,
  SiteDropdownNode,
  SiteDropdownSection,
} from "./types";
import OptionalLink from "@/component/util/optional/OptionalLink";

// Parameters Interface
interface SiteDropdownParameters {
  className?: string;
  style?: CSSProperties;
  dropdownData: SiteDropdownData;
}

// Export Component
export default function SiteDropdown({
  className = "",
  style = {},
  dropdownData,
}: SiteDropdownParameters) {
  // XML Functions
  const getColorScheme = (section: SiteDropdownSection) => {
    if (!section.colorScheme) {
      return "default";
    }
    return section.colorScheme;
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <Dropdown dropdownId={dropdownData.dropdownId}>
        <DropdownButton dropdownId={dropdownData.dropdownId}>
          <div className={`flex-center`}>
            <div>{dropdownData.title}</div>
            <SidePadder size={5} />
            <div className={`${styles["dropdown-chevron"]}`}>
              <SvgIcon>{CHEVRON_DOWN_SVG_PATH}</SvgIcon>
            </div>
          </div>
        </DropdownButton>
        <DropdownMenu dropdownId={dropdownData.dropdownId}>
          {dropdownData.sections.map((section: SiteDropdownSection) => (
            <div
              className={`${styles["section"]} ${styles[`color-scheme-${getColorScheme(section)}`]}`}
            >
              {section.title && (
                <div className={`${styles["section-title"]}`}>
                  {section.title}
                </div>
              )}
              {section.nodes.map((node: SiteDropdownNode) => (
                <div className={`${styles["node"]}`}>
                  <OptionalLink to={node.to}>
                    <div>{node.text}</div>
                  </OptionalLink>
                </div>
              ))}
            </div>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
