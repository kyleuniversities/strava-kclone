// Imports
import { CSSProperties } from "react";
import styles from "./CreatedSegmentsTab.module.css";
import Text from "@/component/util/text/Text";
import InfoContainer from "@/component/util/data/InfoContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Button from "@/component/util/button/Button";
import Spacer from "@/component/util/spacer/Spacer";
import SiteListingTable from "@/component/site/util/listing-table/SiteListingTable";
import { segmentsData } from "./content";

// Parameters Interface
interface CreatedSegmentsTabParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function CreatedSegmentsTab({
  className = "",
  style = {},
}: CreatedSegmentsTabParameters) {
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
        title="Created Segments"
        description="You can view your list of created segments here!"
      >
        <div>
          <Spacer size={10} />
          <div className={`${styles["button"]}`}>
            <Button to="#">View on Map</Button>
          </div>
        </div>
      </InfoContainer>
      <Spacer size={20} />
      <SiteListingTable listingData={segmentsData} />
    </div>
  );
}
