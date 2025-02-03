// Imports
import Database from "@/mock-database/database";

// Constants
const TABLE_NAME = "segment";

// Types
export type SegmentRecord = any;

/**
 * Service Interface for Segments
 */
const segmentServices = {
  /**
   * CREATE Method
   * Creates a new segment
   */
  async createSegment(segment: SegmentRecord): Promise<SegmentRecord> {
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
};

// Export Interface
export default segmentServices;
