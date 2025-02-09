// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./ListingTable.module.css";
import { ListingData, ListingRow } from "./types";

// Parameters Interface
interface ListingTableParameters {
  className?: string;
  style?: CSSProperties;
  listingData: ListingData;
  titleRowFunction: (titleRow: ListingRow) => ReactNode;
  rowFunction: (row: ListingRow, index: number) => ReactNode;
}

// Export Component
export default function ListingTable({
  className = "",
  style = {},
  listingData,
  titleRowFunction,
  rowFunction,
}: ListingTableParameters) {
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
      {titleRowFunction(listingData.titleRow)}
      {listingData.rows.map(rowFunction)}
    </div>
  );
}
