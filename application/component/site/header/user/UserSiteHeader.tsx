// Imports
import { CSSProperties } from "react";
import styles from "./UserSiteHeader.module.css";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import Button from "@/component/util/button/Button";
import SidePadder from "@/component/util/spacer/SidePadder";
import UserTopNavBar from "./UserTopNavBar";
import SiteLogo from "../../logo/SiteLogo";
import SvgIcon from "@/component/util/svg/SvgIcon";
import { BELL_SVG_PATH, CIRCLE_PLUS_SVG_PATH } from "@/resource/svg";
import ProfileImage from "../../profile/ProfileImage";

// Parameters Interface
interface UserSiteHeaderParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserSiteHeader({
  className = "",
  style = {},
}: UserSiteHeaderParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}} flex-center`}
      style={containerStyle}
    >
      <SiteLogo />
      <SidePadder size={15} />
      <UserTopNavBar />
      <FloatRightContainer className="flex-center">
        <Button to="#">Give a Gift</Button>
        <SidePadder size={40} />
        <div>
          <SvgIcon size={30}>{BELL_SVG_PATH}</SvgIcon>
        </div>
        <SidePadder size={40} />
        <ProfileImage />
        <SidePadder size={40} />
        <div className={`${styles["upload-node"]}`}>
          <SvgIcon size={30}>{CIRCLE_PLUS_SVG_PATH}</SvgIcon>
        </div>
      </FloatRightContainer>
    </div>
  );
}
