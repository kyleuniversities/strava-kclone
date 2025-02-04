// Imports
import { LinkIconCardContent } from "@/component/util/card/types";
import {
  FLAG_SVG_PATH,
  PEOPLE_FILL_SVG_PATH,
  PERSON_FILL_UP_SVG_PATH,
  RECORD_CIRCLE_SVG_PATH,
} from "@/resource/svg";

// Data
export const cardsData: LinkIconCardContent[] = [
  {
    svgPath: FLAG_SVG_PATH,
    title: "Clubs on Strava",
    description:
      "Why do it alone? Get more out of your Strava experience by joining or creating a Club.",
    text: "Find or Create a Club on Strava",
    to: "#",
  },
  {
    svgPath: PERSON_FILL_UP_SVG_PATH,
    title: "See what your friends are doing",
    description:
      "Find your friends on Strava or invite them to join you. Cheer them on, discover new workouts and start training with the athletes you already know.",
    text: "Find and Invite your Friends",
    to: "#",
  },
];
