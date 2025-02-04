// Imports
import segmentServices, {
  SegmentBody,
  SegmentRecord,
} from "@/services/segment.services";
import { NextRequest, NextResponse } from "next/server";
import QueryHelper from "./query";

/**
 * Controller Interface for Segments
 */
const segmentController = {
  /**
   * CREATE Method
   * Creates a new segment
   */
  async createSegment(request: NextRequest) {
    try {
      const body: SegmentBody = await request.json();
      const record: SegmentRecord = await segmentServices.createSegment(body);
      return NextResponse.json({
        message: "Segment successfully created!",
        data: record,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error creating segment",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * READ Method
   * Fetches all segments
   */
  async getSegments() {
    try {
      const records = await segmentServices.getSegments();
      return NextResponse.json({
        message: "Segments successfully fetched!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error fetching segments",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * DELETE Method
   * Deletes segments
   */
  async deleteSegments(request: NextRequest) {
    try {
      const queries = QueryHelper.getQuery(request);
      const records = await segmentServices.deleteSegments(queries);
      return NextResponse.json({
        message: "Segments successfully deleted!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error deleting segments",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },
};

// Export Interface
export default segmentController;
