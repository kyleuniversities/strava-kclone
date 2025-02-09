// Imports
import Database from "@/mock-database/database";

// Constants
const TABLE_NAME = "club";

// Types
export type ClubRecord = any;
export type ClubBody = any;

/**
 * Service Interface for Clubs
 */
const clubServices = {
  /**
   * CREATE Method
   * Creates a new club
   */
  async createClub(club: ClubBody): Promise<ClubRecord> {
    await Database.insertOneInto(TABLE_NAME, club);
    return club;
  },

  /**
   * READ Method
   * Creates a new club
   */
  async getClubs(): Promise<ClubRecord[]> {
    return await Database.selectFrom(TABLE_NAME);
  },

  /**
   * DELETE Method
   * Deletes queried clubs
   */
  async deleteClubs(queries: any): Promise<ClubRecord[]> {
    return await Database.delete(TABLE_NAME, queries);
  },
};

// Export Interface
export default clubServices;
