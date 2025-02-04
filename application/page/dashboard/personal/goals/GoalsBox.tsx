// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./GoalsBox.module.css";
import ProfileImage from "@/component/site/profile/ProfileImage";
import Text from "@/component/util/text/Text";
import LabeledNumber from "@/component/util/label/number/LabeledNumber";
import Spacer from "@/component/util/spacer/Spacer";
import Portal from "@/component/util/portal/Portal";
import IconTabPanel from "@/component/site/util/tab/IconTabPanel";
import {
  BICYCLE_SVG_PATH,
  PENCIL_SVG_PATH,
  WALK_SVG_PATH,
  WATER_SVG_PATH,
} from "@/resource/svg";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import GridContainer from "@/component/util/grid/GridContainer";
import GridComponent from "@/component/util/grid/GridComponent";
import SvgIcon from "@/component/util/svg/SvgIcon";
import SidePadder from "@/component/util/spacer/SidePadder";
import GoalsBoxWeekDisplay from "./GoalsBoxWeekDisplay";

// Parameters Interface
interface GoalsBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GoalsBox({
  className = "",
  style = {},
}: GoalsBoxParameters) {
  // XML Parameters
  const tabs = [WALK_SVG_PATH, BICYCLE_SVG_PATH, WATER_SVG_PATH];
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} flex-center flex-column`}
      style={containerStyle}
    >
      <IconTabPanel tabs={tabs} className="w-full">
        {tabs.map((path: ReactNode) => (
          <div className={`${styles["tab"]} w-full`}>
            <div
              className={`${styles["tab-box"]} ${styles["this-week-box"]} w-full`}
            >
              <div className="w-full flex">
                <div>
                  <SvgIcon className="clear">{PENCIL_SVG_PATH}</SvgIcon>
                </div>
                <div className="w-full flex-center">THIS WEEK</div>
                <FloatRightContainer>
                  <SvgIcon>{PENCIL_SVG_PATH}</SvgIcon>
                </FloatRightContainer>
              </div>
              <div className="w-full flex-center">
                <Text size="soft-medium-large">0 mi</Text>
              </div>
              <Spacer size={10} />
              <div className={`${styles["color-orange"]} w-full flex-center`}>
                <div>
                  <GoalsBoxWeekDisplay />
                </div>
                <SidePadder size={5} />
                <div className={`${styles["path-icon"]} flex-center`}>
                  <SvgIcon size={20}>{path}</SvgIcon>
                </div>
              </div>
              <Spacer size={10} />
              <div className={`flex-center`}>
                <div>0h0m</div>
                <SidePadder size={5} />
                <div>|</div>
                <SidePadder size={5} />
                <div>0ft</div>
              </div>
            </div>
            <div className={`${styles["tab-box"]} ${styles["this-year-box"]}`}>
              <div className="w-full flex">
                <div className="w-full flex-center">THIS YEAR</div>
              </div>
              <div className="w-full flex-center">
                <Text size="soft-medium-large">0 mi</Text>
              </div>
            </div>
            <div
              className={`${styles["tab-box"]} ${styles["manage-goals-box"]}`}
            >
              <Portal to="#">Manage Your Goals</Portal>
            </div>
          </div>
        ))}
      </IconTabPanel>
    </div>
  );
}
