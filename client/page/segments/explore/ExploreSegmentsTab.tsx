// Imports
import { CSSProperties } from "react";
import styles from "./ExploreSegmentsTab.module.css";
import Text from "@/component/util/text/Text";
import InfoContainer from "@/component/util/data/InfoContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Button from "@/component/util/button/Button";
import Spacer from "@/component/util/spacer/Spacer";
import SiteListingTable from "@/component/site/util/listing-table/SiteListingTable";
import { segmentsData } from "./content";

// Parameters Interface
interface ExploreSegmentsTabParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ExploreSegmentsTab({
  className = "",
  style = {},
}: ExploreSegmentsTabParameters) {
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
      <InfoContainer
        title="Explore Segments"
        description="You can explore new segments on the Map!"
      >
        <div>
          <Spacer size={10} />
          <div className={`${styles["button"]}`}>
            <Button to="#">Explore Segments</Button>
          </div>
        </div>
      </InfoContainer>
    </div>
  );
}
