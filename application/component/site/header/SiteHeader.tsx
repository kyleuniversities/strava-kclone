// Imports
import { CSSProperties } from "react";
import styles from "./SiteHeader.module.css";
import SiteLogo from "../logo/SiteLogo";
import TopNavBar from "./TopNavBar";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import Button from "@/component/util/button/Button";
import SidePadder from "@/component/util/spacer/SidePadder";
import SvgIcon from "@/component/util/svg/SvgIcon";
import { BELL_SVG_PATH } from "@/resource/svg";

// Parameters Interface
interface SiteHeaderParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SiteHeader({
  className = "",
  style = {},
}: SiteHeaderParameters) {
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
      <TopNavBar />
      <FloatRightContainer>
        <Button colorScheme="white" to="dashboard">
          Log In
        </Button>
      </FloatRightContainer>
    </div>
  );
}
