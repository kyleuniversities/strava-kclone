// Imports
import { CSSProperties } from "react";
import styles from "./FreeAppBox.module.css";
import IconCard from "@/component/util/card/IconCard";
import { cardsData, IconCardContent } from "../get-started/content";
import Text from "@/component/util/text/Text";
import Spacer from "@/component/util/spacer/Spacer";
import Button from "@/component/util/button/Button";
import ImageCard from "@/component/util/card/ImageCard";
import AppStorePrompt from "@/component/util/app-prompts/AppStorePrompt";
import GooglePlayPrompt from "@/component/util/app-prompts/GooglePlayPrompt";
import SidePadder from "@/component/util/spacer/SidePadder";

// Parameters Interface
interface FreeAppBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function FreeAppBox({
  className = "",
  style = {},
}: FreeAppBoxParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      <ImageCard
        src="/props/apps.png"
        title={"Get our free app"}
        width={160}
        paddingX={30}
        description={
          "Record, analyze and share activities right from your phone. Our free mobile app keeps you connected with friends and ready for the next workout."
        }
      >
        <>
          <Spacer size={10} />
          <div className={`${styles["card-content"]} flex`}>
            <AppStorePrompt />
            <SidePadder size={10} />
            <GooglePlayPrompt />
          </div>
        </>
      </ImageCard>
    </div>
  );
}
