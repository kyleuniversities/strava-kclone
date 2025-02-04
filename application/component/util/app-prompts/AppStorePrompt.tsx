// Imports
import { CSSProperties } from "react";
import styles from "./AppStorePrompt.module.css";
import AppPrompt from "./AppPrompt";
import { APPLE_SVG_PATH } from "@/resource/svg";

// Parameters Interface
interface AppStorePromptParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function AppStorePrompt({
  className = "",
  style = {},
}: AppStorePromptParameters) {
  return (
    <AppPrompt
      className={className}
      style={style}
      prompt="Download on the"
      medium="App Store"
      path={APPLE_SVG_PATH}
    />
  );
}
