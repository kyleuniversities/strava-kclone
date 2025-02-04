// Imports
import { request } from ".";

/**
 * CREATE Method
 * Gets all segments
 */
export const createSegment = async (body: any) => {
  const headers = { "Content-Type": "application/json" };
  return await request("/segment", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
};

/**
 * READ Method
 * Gets all segments
 */
export const getAllSegments = async () => {
  return await request("/segment");
};

/**
 * DELETE Method
 * Deletes a segment by id
 */
export const deleteSegmentById = async (id: string) => {
  const headers = { "Content-Type": "application/json" };
  return await request(`/segment?id=${id}`, {
    method: "DELETE",
    headers,
  });
};
