// Imports
import { CSSProperties } from "react";
import styles from "./StarredSegmentsTab.module.css";
import Text from "@/component/util/text/Text";
import InfoContainer from "@/component/util/data/InfoContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Button from "@/component/util/button/Button";
import Spacer from "@/component/util/spacer/Spacer";
import SiteListingTable from "@/component/site/util/listing-table/SiteListingTable";
import { segmentsData } from "./content";

// Parameters Interface
interface StarredSegmentsTabParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function StarredSegmentsTab({
  className = "",
  style = {},
}: StarredSegmentsTabParameters) {
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
        title="Starred Segments allow you to keep track of your favorite segments in one place"
        description="You can star segments on Activity and Segment pages, as well as Segment search.  Press the star to add it to your list. If you decide you want to remove the star, simply press it again."
      >
        <div>
          <LinkSpan href="#" colorScheme="blue">
            Learn more about Segments
          </LinkSpan>
        </div>
      </InfoContainer>
      <Spacer size={20} />
      <div className={`${styles["button"]}`}>
        <Button to="#">View on Map</Button>
      </div>
      <Spacer size={20} />
      <SiteListingTable listingData={segmentsData} />
    </div>
  );
}
