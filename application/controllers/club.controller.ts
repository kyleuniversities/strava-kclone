// Imports
import clubServices, { ClubBody, ClubRecord } from "@/services/club.services";
import { NextRequest, NextResponse } from "next/server";
import QueryHelper from "./query";

/**
 * Controller Interface for Clubs
 */
const clubController = {
  /**
   * CREATE Method
   * Creates a new club
   */
  async createClub(request: NextRequest) {
    try {
      const body: ClubBody = await request.json();
      const record: ClubRecord = await clubServices.createClub(body);
      return NextResponse.json({
        message: "Club successfully created!",
        data: record,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error creating club",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * READ Method
   * Fetches all clubs
   */
  async getClubs() {
    try {
      const records = await clubServices.getClubs();
      return NextResponse.json({
        message: "Clubs successfully fetched!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error fetching clubs",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * DELETE Method
   * Deletes clubs
   */
  async deleteClubs(request: NextRequest) {
    try {
      const queries = QueryHelper.getQuery(request);
      const records = await clubServices.deleteClubs(queries);
      return NextResponse.json({
        message: "Clubs successfully deleted!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error deleting clubs",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },
};

// Export Interface
export default clubController;
