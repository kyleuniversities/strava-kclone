// Imports
import { CSSProperties } from "react";
import styles from "./GooglePlayPrompt.module.css";
import AppPrompt from "./AppPrompt";
import { GOOGLE_PLAY_SVG_PATH } from "@/resource/svg";

// Parameters Interface
interface GooglePlayPromptParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GooglePlayPrompt({
  className = "",
  style = {},
}: GooglePlayPromptParameters) {
  return (
    <AppPrompt
      className={className}
      style={style}
      prompt="GET IT ON"
      medium="Google Play"
      path={GOOGLE_PLAY_SVG_PATH}
    />
  );
}
