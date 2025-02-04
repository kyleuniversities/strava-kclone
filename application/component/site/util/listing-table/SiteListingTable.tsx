// Imports
import { CSSProperties } from "react";
import styles from "./SiteListingTable.module.css";
import ListingTable from "@/component/util/listing-table/ListingTable";
import {
  ListingCell,
  ListingData,
  ListingRow,
} from "@/component/util/listing-table/types";

// Parameters Interface
interface SiteListingTableParameters {
  className?: string;
  style?: CSSProperties;
  listingData: ListingData;
}

// Export Component
export default function SiteListingTable({
  className = "",
  style = {},
  listingData,
}: SiteListingTableParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // XML Sub Component Functions
  const titleRowFunction = (row: ListingRow) => (
    <div className={`${styles["title-row"]} flex`}>
      {row.cells.map((cell: ListingCell) => (
        <div
          className={`${styles["title-cell"]}`}
          style={{ width: cell.width }}
        >
          {cell.value}
        </div>
      ))}
    </div>
  );
  const rowFunction = (row: ListingRow, index: number) => (
    <div
      className={`${styles["row"]} ${styles[`row-${index % 2 === 0 ? "first" : "second"}`]} flex`}
    >
      {row.cells.map((cell: ListingCell) => (
        <div className={`${styles["cell"]}`} style={{ width: cell.width }}>
          {cell.value}
        </div>
      ))}
    </div>
  );

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <ListingTable
        listingData={listingData}
        titleRowFunction={titleRowFunction}
        rowFunction={rowFunction}
      />
    </div>
  );
}
