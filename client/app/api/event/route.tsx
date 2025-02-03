// Imports
import eventController from "@/controllers/event.controller";
import { NextRequest } from "next/server";

// Routes
export async function POST(request: NextRequest) {
  return await eventController.createEvent(request);
}

export async function GET() {
  return await eventController.getEvents();
}

export async function DELETE(request: NextRequest) {
  return await eventController.deleteEvents(request);
}
