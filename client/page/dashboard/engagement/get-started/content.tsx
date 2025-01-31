// Imports
import { PEOPLE_FILL_SVG_PATH, RECORD_CIRCLE_SVG_PATH } from "@/resource/svg";
import { ReactNode } from "react";

// Types
export interface GetStartedIconCardContent {
  svgPath: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  to: string;
}

// Data
export const cardsData: GetStartedIconCardContent[] = [
  {
    svgPath: RECORD_CIRCLE_SVG_PATH,
    title: "Record your first activity",
    description:
      "Set up your GPS device and seamlessly upload your workouts right to Strava. No device? No problem - record and connect anytime, anywhere with our mobile app.",
    buttonText: "Connect Device",
    to: "#",
  },
  {
    svgPath: PEOPLE_FILL_SVG_PATH,
    title: "See what your friends are doing",
    description:
      "Find your friends on Strava or invite them to join you. Cheer them on, discover new workouts and start training with the athletes you already know.",
    buttonText: "Find Friends",
    to: "#",
  },
];
