// Imports
import { CSSProperties } from "react";
import styles from "./SocialSection.module.css";
import IconCard from "@/component/util/card/IconCard";
import Spacer from "@/component/util/spacer/Spacer";
import { cardsData } from "./content";
import { LinkIconCardContent } from "@/component/util/card/types";
import Text from "@/component/util/text/Text";
import LinkSpan from "@/component/util/text/span/LinkSpan";

// Parameters Interface
interface SocialSectionParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SocialSection({
  className = "",
  style = {},
}: SocialSectionParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <div className={`${styles["social-box"]}`}>
        {cardsData.map((cardData: LinkIconCardContent, index: number) => (
          <IconCard
            svgPath={cardData.svgPath}
            contentWidth={40}
            title={cardData.title}
            description={cardData.description}
          >
            <Text size="small">
              <LinkSpan href={cardData.to}>{cardData.text}</LinkSpan>
            </Text>
          </IconCard>
        ))}
      </div>
    </div>
  );
}
