// Imports
import Database from "@/mock-database/database";

// Constants
const TABLE_NAME = "segment";

// Types
export type SegmentRecord = any;
export type SegmentBody = any;

/**
 * Service Interface for Segments
 */
const segmentServices = {
  /**
   * CREATE Method
   * Creates a new segment
   */
  async createSegment(segment: SegmentBody): Promise<SegmentRecord> {
    await Database.insertOneInto(TABLE_NAME, segment);
    return segment;
  },

  /**
   * READ Method
   * Creates a new segment
   */
  async getSegments(): Promise<SegmentRecord[]> {
    return await Database.selectFrom(TABLE_NAME);
  },

  /**
   * DELETE Method
   * Deletes queried segments
   */
  async deleteSegments(queries: any): Promise<SegmentRecord[]> {
    return await Database.delete(TABLE_NAME, queries);
  },
};

// Export Interface
export default segmentServices;
