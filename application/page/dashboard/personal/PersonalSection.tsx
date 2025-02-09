// Imports
import { CSSProperties } from "react";
import styles from "./PersonalSection.module.css";
import UserBox from "./user/UserBox";
import Spacer from "@/component/util/spacer/Spacer";
import GoalsBox from "./goals/GoalsBox";

// Parameters Interface
interface PersonalSectionParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function PersonalSection({
  className = "",
  style = {},
}: PersonalSectionParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} px-25p`}
      style={containerStyle}
    >
      <UserBox />
      <Spacer size={20} />
      <GoalsBox />
    </div>
  );
}
