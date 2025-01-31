// Imports
import { CSSProperties } from "react";
import styles from "./GoalsBoxWeekDisplay.module.css";

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
  const date = new Date(new Date().getTime() - 1000 * 60 * 60 * 8);
  const day = (Number(date.getDay()) + 6) % 7;

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
          <div>&nbsp;</div>
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
