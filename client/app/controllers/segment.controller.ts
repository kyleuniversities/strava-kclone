// Imports
import segmentServices, { SegmentRecord } from "@/services/segment.services";
import { NextRequest, NextResponse } from "next/server";

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
      const body: SegmentRecord = await request.json();
      const record = await segmentServices.createSegment(body);
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
   * Creates a new segment
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
};

// Export Interface
export default segmentController;
