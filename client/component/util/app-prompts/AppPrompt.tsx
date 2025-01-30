// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./AppPrompt.module.css";
import SvgIcon from "../svg/SvgIcon";
import SidePadder from "../spacer/SidePadder";

// Parameters Interface
interface AppPromptParameters {
  className?: string;
  style?: CSSProperties;
  prompt: string;
  medium: string;
  path: ReactNode;
}

// Export Component
export default function AppPrompt({
  className = "",
  style = {},
  prompt,
  medium,
  path,
}: AppPromptParameters) {
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
      <div>
        <SvgIcon size={24}>{path}</SvgIcon>
      </div>
      <SidePadder size={10} />
      <div>
        <div className={styles["prompt"]}>{prompt}</div>
        <div className={styles["medium"]}>{medium}</div>
      </div>
    </div>
  );
}
