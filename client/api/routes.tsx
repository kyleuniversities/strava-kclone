// Imports
import { request } from ".";

/**
 * CREATE Method
 * Gets all routes
 */
export const createRoute = async (body: any) => {
  const headers = { "Content-Type": "application/json" };
  return await request("/route", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
};

/**
 * READ Method
 * Gets all routes
 */
export const getAllRoutes = async () => {
  return await request("/route");
};

/**
 * DELETE Method
 * Deletes a route by id
 */
export const deleteRouteById = async (id: string) => {
  const headers = { "Content-Type": "application/json" };
  return await request(`/route?id=${id}`, {
    method: "DELETE",
    headers,
  });
};
