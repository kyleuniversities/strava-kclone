// Imports
import { CSSProperties } from "react";
import styles from "./GoalsBoxWeekDisplay.module.css";
import Spacer from "@/component/util/spacer/Spacer";

// Parameters Interface
interface GoalsBoxWeekDisplayParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GoalsBoxWeekDisplay({
  className = "",
  style = {},
}: GoalsBoxWeekDisplayParameters) {
  // Constants
  const dayTexts = ["M", "T", "W", "T", "F", "S", "S"];
  const globalDate = new Date();
  const localDate = new Date(
    globalDate.getTime() - 1000 * 60 * globalDate.getTimezoneOffset(),
  );
  const day = (Number(localDate.getDay()) + 6) % 7;

  // XML Functions
  const getHighlightedClassName = (index: number) => {
    return index === day ? "highlighted" : "";
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} flex`}
      style={containerStyle}
    >
      {dayTexts.map((dayText: string, index: number) => (
        <div className={`${styles["day"]} flex-center flex-column`}>
          <Spacer size={20} />
          <div
            className={`${styles["amount"]} ${getHighlightedClassName(index)}`}
          >
            _
          </div>
          <div>{dayText}</div>
        </div>
      ))}
    </div>
  );
}
