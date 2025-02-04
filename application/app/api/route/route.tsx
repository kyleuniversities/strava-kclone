// Imports
import routeController from "@/controllers/route.controller";
import { NextRequest } from "next/server";

// Routes
export async function POST(request: NextRequest) {
  return await routeController.createRoute(request);
}

export async function GET() {
  return await routeController.getRoutes();
}

export async function DELETE(request: NextRequest) {
  return await routeController.deleteRoutes(request);
}
