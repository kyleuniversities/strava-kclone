// Use Client
"use client";

// Imports
import { CSSProperties, useEffect, useState } from "react";
import styles from "./CreatedSegmentsTab.module.css";
import Text from "@/component/util/text/Text";
import InfoContainer from "@/component/util/data/InfoContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Button from "@/component/util/button/Button";
import Spacer from "@/component/util/spacer/Spacer";
import SiteListingTable from "@/component/site/util/listing-table/SiteListingTable";
import { segmentsData } from "./content";
import { getAllSegments } from "@/api/segments";

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
  // Use State Constants
  const [extraSegments, setExtraSegments] = useState<any[]>([]);

  // Use Effects
  useEffect(() => {
    getAllSegments().then((res) => {
      setExtraSegments(res.data);
    });
  }, []);

  // Helper Functions
  const toRow = (segment: any) => {
    const width = "9%";
    const cells = [];
    const keys = Object.keys(segment);
    for (let i = 1; i < keys.length; i++) {
      const key = keys[i];
      cells.push({ value: segment[key], width });
    }
    return { cells };
  };

  const deepCopy = (item: any) => {
    return JSON.parse(JSON.stringify(item));
  };

  const getTotalSegmentData = (extraSegmentData: any[]) => {
    const totalSegmentData = deepCopy(segmentsData);
    for (let segment of extraSegmentData) {
      totalSegmentData.rows.push(segment);
    }
    return totalSegmentData;
  };

  // XML Constants
  const extraSegmentData = extraSegments.map(toRow);
  const totalSegmentData = getTotalSegmentData(extraSegmentData);

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
      <SiteListingTable listingData={totalSegmentData} />
    </div>
  );
}
