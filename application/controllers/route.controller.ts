// Imports
import routeServices, {
  RouteBody,
  RouteRecord,
} from "@/services/route.services";
import { NextRequest, NextResponse } from "next/server";
import QueryHelper from "./query";

/**
 * Controller Interface for Routes
 */
const routeController = {
  /**
   * CREATE Method
   * Creates a new route
   */
  async createRoute(request: NextRequest) {
    try {
      const body: RouteBody = await request.json();
      const record: RouteRecord = await routeServices.createRoute(body);
      return NextResponse.json({
        message: "Route successfully created!",
        data: record,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error creating route",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * READ Method
   * Fetches all routes
   */
  async getRoutes() {
    try {
      const records = await routeServices.getRoutes();
      return NextResponse.json({
        message: "Routes successfully fetched!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error fetching routes",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },

  /**
   * DELETE Method
   * Deletes routes
   */
  async deleteRoutes(request: NextRequest) {
    try {
      const queries = QueryHelper.getQuery(request);
      const records = await routeServices.deleteRoutes(queries);
      return NextResponse.json({
        message: "Routes successfully deleted!",
        totalCount: records.length,
        data: records,
      });
    } catch (error: any) {
      return NextResponse.json(
        {
          error: "Error deleting routes",
          message: error.message,
        },
        { status: 500 },
      );
    }
  },
};

// Export Interface
export default routeController;
