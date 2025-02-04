// Imports
import eventServices, {
  EventBody,
  EventRecord,
} from "@/services/event.services";
import { NextRequest, NextResponse } from "next/server";
import QueryHelper from "./query";

/**
 * Controller Interface for Events
 */
const eventController = {
  /**
   * CREATE Method
   * Creates a new event
   */
  async createEvent(request: NextRequest) {
    try {
      const body: EventBody = await request.json();
      const record: EventRecord = await eventServices.createEvent(body);
      return NextResponse.json({
        message: "Event successfully created!",
        data: record,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error creating event",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * READ Method
   * Fetches all events
   */
  async getEvents() {
    try {
      const records = await eventServices.getEvents();
      return NextResponse.json({
        message: "Events successfully fetched!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error fetching events",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * DELETE Method
   * Deletes events
   */
  async deleteEvents(request: NextRequest) {
    try {
      const queries = QueryHelper.getQuery(request);
      const records = await eventServices.deleteEvents(queries);
      return NextResponse.json({
        message: "Events successfully deleted!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error deleting events",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },
};

// Export Interface
export default eventController;
