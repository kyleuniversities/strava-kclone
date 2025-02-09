// Imports
import clubController from "@/controllers/club.controller";
import { NextRequest } from "next/server";

// Routes
export async function POST(request: NextRequest) {
  return await clubController.createClub(request);
}

export async function GET() {
  return await clubController.getClubs();
}

export async function DELETE(request: NextRequest) {
  return await clubController.deleteClubs(request);
}
