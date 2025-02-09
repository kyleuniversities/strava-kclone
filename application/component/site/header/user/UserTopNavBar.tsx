// Imports
import { CSSProperties } from "react";
import styles from "./UserTopNavBar.module.css";
import Dropdown from "@/component/util/dropdown/Dropdown";
import DropdownButton from "@/component/util/dropdown/DropdownButton";
import DropdownMenu from "@/component/util/dropdown/DropdownMenu";
import { CHEVRON_DOWN_SVG_PATH, CHEVRON_RIGHT_SVG_PATH } from "@/resource/svg";
import SvgIcon from "@/component/util/svg/SvgIcon";
import SidePadder from "@/component/util/spacer/SidePadder";
import SiteDropdown from "../../util/dropdown/SiteDropdown";
import { dashboardDropdownData, trainingDropdownData } from "./content";

// Parameters Interface
interface UserTopNavBarParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserTopNavBar({
  className = "",
  style = {},
}: UserTopNavBarParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} flex`}
      style={containerStyle}
    >
      <div className={styles["nav-item"]}>
        <SiteDropdown dropdownData={dashboardDropdownData} />
      </div>
      <div className={styles["nav-item"]}>
        <SiteDropdown dropdownData={trainingDropdownData} />
      </div>
      <div className={styles["nav-item"]}>Maps</div>
      <div className={styles["nav-item"]}>Challenges</div>
    </div>
  );
}
