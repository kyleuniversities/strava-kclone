// Use Client
"use client";

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
import { hideDropdownMenusExcept } from "@/utility/dropdown";

// Parameters Interface
interface SiteDropdownParameters {
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  maxHeight?: number | string;
  nodePadding?: number | string;
  currentTitle?: string;
  onSelect?: (text: string) => void;
  dropdownData: SiteDropdownData;
}

// Export Component
export default function SiteDropdown({
  className = "",
  style = {},
  width,
  maxHeight,
  nodePadding = 20,
  currentTitle = "",
  dropdownData,
  onSelect = (text: string) => {},
}: SiteDropdownParameters) {
  // Handle Methods
  const handleSelect = (text: string) => {
    setTimeout(() => {
      hideDropdownMenusExcept();
    }, 50);
    onSelect(text);
  };

  // XML Methods
  const getColorScheme = (section: SiteDropdownSection) => {
    if (!section.colorScheme) {
      return "default";
    }
    return section.colorScheme;
  };
  const getTitle = () => {
    return currentTitle.length ? currentTitle : dropdownData.title;
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    width,
  };
  const nodeStyle: CSSProperties = {
    padding: nodePadding,
    width,
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
            <div>{getTitle()}</div>
            <SidePadder size={5} />
            <div className={`${styles["dropdown-chevron"]}`}>
              <SvgIcon>{CHEVRON_DOWN_SVG_PATH}</SvgIcon>
            </div>
          </div>
        </DropdownButton>
        <DropdownMenu
          maxHeight={maxHeight}
          dropdownId={dropdownData.dropdownId}
        >
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
                <div
                  onClick={() => handleSelect(node.text)}
                  className={`${styles["node"]}`}
                  style={nodeStyle}
                >
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
