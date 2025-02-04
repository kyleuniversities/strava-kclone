// Imports
import { LinkIconCardContent } from "@/component/util/card/types";
import { PEOPLE_FILL_SVG_PATH, RECORD_CIRCLE_SVG_PATH } from "@/resource/svg";

// Data
export const cardsData: LinkIconCardContent[] = [
  {
    svgPath: RECORD_CIRCLE_SVG_PATH,
    title: "Record your first activity",
    description:
      "Set up your GPS device and seamlessly upload your workouts right to Strava. No device? No problem - record and connect anytime, anywhere with our mobile app.",
    text: "Connect Device",
    to: "#",
  },
  {
    svgPath: PEOPLE_FILL_SVG_PATH,
    title: "See what your friends are doing",
    description:
      "Find your friends on Strava or invite them to join you. Cheer them on, discover new workouts and start training with the athletes you already know.",
    text: "Find Friends",
    to: "#",
  },
];
