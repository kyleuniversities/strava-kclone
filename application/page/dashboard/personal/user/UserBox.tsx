// Imports
import { CSSProperties } from "react";
import styles from "./UserBox.module.css";
import ProfileImage from "@/component/site/profile/ProfileImage";
import Text from "@/component/util/text/Text";
import LabeledNumber from "@/component/util/label/number/LabeledNumber";
import Spacer from "@/component/util/spacer/Spacer";
import Portal from "@/component/util/portal/Portal";

// Parameters Interface
interface UserBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserBox({
  className = "",
  style = {},
}: UserBoxParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} flex-center flex-column`}
      style={containerStyle}
    >
      <div className={`${styles["main-container"]} flex-center flex-column`}>
        <ProfileImage size={80} />
        <Text size="large">Kyle Humphrey</Text>
        <Spacer size={10} />
        <div className="flex-center">
          <LabeledNumber label="Following" number={0} />
          <LabeledNumber label="Followers" number={0} />
          <LabeledNumber label="Activities" number={0} />
        </div>
        <Spacer size={20} />
      </div>
      <div className={`${styles["add-container"]} flex-center flex-column`}>
        <Portal to="#">
          Add an activity. Learn how to record or upload an activity to Strava.
        </Portal>
      </div>
    </div>
  );
}
