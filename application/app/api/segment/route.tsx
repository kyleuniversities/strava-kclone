// Imports
import segmentController from "@/controllers/segment.controller";
import { NextRequest } from "next/server";

// Routes
export async function POST(request: NextRequest) {
  return await segmentController.createSegment(request);
}

export async function GET() {
  return await segmentController.getSegments();
}

export async function DELETE(request: NextRequest) {
  return await segmentController.deleteSegments(request);
}
