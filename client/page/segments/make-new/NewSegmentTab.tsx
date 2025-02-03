// Use Client
"use client";

// Imports
import { CSSProperties, useState } from "react";
import styles from "./NewSegmentTab.module.css";
import InfoContainer from "@/component/util/data/InfoContainer";
import Spacer from "@/component/util/spacer/Spacer";
import LabeledDropdown from "@/component/util/input/label/LabeledDropdown";
import { sportTypeData } from "./content";
import LabeledTextField from "@/component/util/input/label/LabeledTextField";
import LabeledCheckBox from "@/component/util/input/label/LabeledCheckBox";
import Button from "@/component/util/button/Button";
import { SP } from "next/dist/shared/lib/utils";

// Parameters Interface
interface NewSegmentTabParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function NewSegmentTab({
  className = "",
  style = {},
}: NewSegmentTabParameters) {
  // Use State Constants
  const [sportType, setSportType] = useState<string>("Running");
  const [segmentName, setSegmentName] = useState<string>("");
  const [starred, setStarred] = useState<boolean>(false);
  const [distance, setDistance] = useState<string>("");
  const [elevDiff, setElevDiff] = useState<string>("");
  const [avgGrade, setAvgGrade] = useState<string>("");

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
        title="Create New Segment"
        description="You can create a new segment here!"
      >
        <div>&nbsp;</div>
      </InfoContainer>
      <Spacer size={10} />
      {/*
      Star
Sport
Name
Cat.
Dist.
Elev. Diff.
Avg. Grade
👑 Men
👑 Women
My PR
My Goal
      */}
      <div className={`${styles["field-container"]}`}>
        <div className={`${styles["field-group"]}`}>
          <div className={`${styles["name-field"]} ${styles["field"]}`}>
            <LabeledTextField
              labelText="Segment Name"
              placeholder="Enter a Segment Name"
              width={600}
              value={segmentName}
              setValue={setSegmentName}
            />
          </div>
          <div className={`${styles["sport-type-field"]} ${styles["field"]}`}>
            <LabeledDropdown
              labelText="Sport Type"
              value={sportType}
              setValue={setSportType}
              dropdownData={sportTypeData}
              maxHeight="50vh"
              nodePadding={10}
              width={400}
            />
          </div>
          <div className={`${styles["starred-field"]} ${styles["field"]}`}>
            <LabeledCheckBox
              labelText="Starred"
              width={200}
              checked={starred}
              setChecked={setStarred}
              checkboxId="starred-checkbox"
              subLabelText="Segment is Starred"
            />
          </div>
        </div>
        <div className={`${styles["field-group"]}`}>
          <div className={`${styles["distance-field"]} ${styles["field"]}`}>
            <LabeledTextField
              labelText="Distance (mi)"
              placeholder="Enter a Distance"
              width={400}
              value={distance}
              setValue={setDistance}
            />
          </div>
          <div className={`${styles["elev-field"]} ${styles["field"]}`}>
            <LabeledTextField
              labelText="Elevation Difference (ft)"
              placeholder="Enter an Elevation Difference"
              width={400}
              value={elevDiff}
              setValue={setElevDiff}
            />
          </div>
          <div className={`${styles["avg-grades-field"]} ${styles["field"]}`}>
            <LabeledTextField
              labelText="Avegrade Grade (%)"
              placeholder="Enter an Average Grade"
              width={400}
              value={elevDiff}
              setValue={setElevDiff}
            />
          </div>
        </div>
      </div>
      <Spacer size={25} />
      <Button>Create Segment</Button>
    </div>
  );
}
