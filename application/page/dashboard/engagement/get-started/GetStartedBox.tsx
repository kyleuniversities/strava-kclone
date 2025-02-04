// Imports
import { CSSProperties } from "react";
import styles from "./GetStartedBox.module.css";
import Text from "@/component/util/text/Text";
import IconCard from "@/component/util/card/IconCard";
import { RECORD_CIRCLE_SVG_PATH } from "@/resource/svg";
import Button from "@/component/util/button/Button";
import Spacer from "@/component/util/spacer/Spacer";
import { cardsData } from "./content";
import { LinkIconCardContent } from "@/component/util/card/types";

// Parameters Interface
interface GetStartedBoxParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function GetStartedBox({
  className = "",
  style = {},
}: GetStartedBoxParameters) {
  // XML Functions
  const getBorderBottomClassName = (list: any[], index: number) => {
    if (index < list.length - 1) {
      return styles["border-bottom"];
    }
    return "";
  };

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
      <div className={`${styles["image-container"]}`}>
        <img className={`${styles["image"]}`} src="/props/get-started.png" />
      </div>
      <div className="pd-15">
        <div className={`${styles["prompt"]}`}>
          <Text size="soft-large">Get Started</Text>
          <Text size="soft-medium-small">
            We've listed a couple of steps to help you get set up on Strava.
          </Text>
        </div>
        <div>
          {cardsData.map((cardData: LinkIconCardContent, index: number) => (
            <IconCard
              svgPath={cardData.svgPath}
              title={cardData.title}
              description={cardData.description}
            >
              <div
                className={`${styles["card-content"]} ${getBorderBottomClassName(cardsData, index)}`}
              >
                <Spacer size={10} />
                <div className={`${styles["button"]}`}>
                  <Button to={cardData.to}>{cardData.text}</Button>
                </div>
                <Spacer size={20} />
              </div>
            </IconCard>
          ))}
        </div>
      </div>
    </div>
  );
}
