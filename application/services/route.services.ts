// Imports
import Database from "@/mock-database/database";

// Constants
const TABLE_NAME = "route";

// Types
export type RouteRecord = any;
export type RouteBody = any;

/**
 * Service Interface for Routes
 */
const routeServices = {
  /**
   * CREATE Method
   * Creates a new route
   */
  async createRoute(route: RouteBody): Promise<RouteRecord> {
    await Database.insertOneInto(TABLE_NAME, route);
    return route;
  },

  /**
   * READ Method
   * Creates a new route
   */
  async getRoutes(): Promise<RouteRecord[]> {
    return await Database.selectFrom(TABLE_NAME);
  },

  /**
   * DELETE Method
   * Deletes queried routes
   */
  async deleteRoutes(queries: any): Promise<RouteRecord[]> {
    return await Database.delete(TABLE_NAME, queries);
  },
};

// Export Interface
export default routeServices;
