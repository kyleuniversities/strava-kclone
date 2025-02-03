// Imports
import segmentController from "@/app/controllers/segment.controller";
import { NextRequest } from "next/server";

// Routes
export async function POST(request: NextRequest) {
  return await segmentController.createSegment(request);
}

export async function GET() {
  return await segmentController.getSegments();
}
