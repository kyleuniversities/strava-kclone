// Imports
import Database from "@/mock-database/database";

// Constants
const TABLE_NAME = "event";

// Types
export type EventRecord = any;
export type EventBody = any;

/**
 * Service Interface for Events
 */
const eventServices = {
  /**
   * CREATE Method
   * Creates a new event
   */
  async createEvent(event: EventBody): Promise<EventRecord> {
    await Database.insertOneInto(TABLE_NAME, event);
    return event;
  },

  /**
   * READ Method
   * Creates a new event
   */
  async getEvents(): Promise<EventRecord[]> {
    return await Database.selectFrom(TABLE_NAME);
  },

  /**
   * DELETE Method
   * Deletes queried events
   */
  async deleteEvents(queries: any): Promise<EventRecord[]> {
    return await Database.delete(TABLE_NAME, queries);
  },
};

// Export Interface
export default eventServices;
