// Export Interfaces
export interface ListingCell {
  value: string;
  width: number | string;
}
export interface ListingRow {
  cells: ListingCell[];
}
export interface ListingData {
  titleRow: ListingRow;
  rows: ListingRow[];
}
