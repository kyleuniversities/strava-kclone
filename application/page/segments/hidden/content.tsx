// Imports
import { ListingData } from "@/component/util/listing-table/types";

// Constants
const starWidth = "9%";
const sportWidth = "9%";
const nameWidth = "9%";
const catWidth = "9%";
const distWidth = "9%";
const elevWidth = "9%";
const avgWidth = "9%";
const menWidth = "9%";
const womenWidth = "9%";
const myPrWidth = "9%";
const myGoalWidth = "9%";

// Export Data
export const segmentsData: ListingData = {
  titleRow: {
    cells: [
      { value: "Star", width: starWidth },
      { value: "Sport", width: sportWidth },
      { value: "Name", width: nameWidth },
      { value: "Cat.", width: catWidth },
      { value: "Dist.", width: distWidth },
      { value: "Elev. Diff.", width: elevWidth },
      { value: "Avg. Grade", width: avgWidth },
      { value: "👑 Men", width: menWidth },
      { value: "👑 Women", width: womenWidth },
      { value: "My PR", width: myPrWidth },
      { value: "My Goal", width: myGoalWidth },
    ],
  },
  rows: [
    {
      cells: [
        { value: "★", width: starWidth },
        { value: "Ride", width: sportWidth },
        { value: "Alpe D'Huez", width: nameWidth },
        { value: "1", width: catWidth },
        { value: "8.8 mi", width: distWidth },
        { value: "3,596 ft", width: elevWidth },
        { value: "8%", width: avgWidth },
        { value: "44:00", width: menWidth },
        { value: "51:00", width: womenWidth },
        { value: "1:01:40", width: myPrWidth },
        { value: "--", width: myGoalWidth },
      ],
    },
    {
      cells: [
        { value: "★", width: starWidth },
        { value: "Ride", width: sportWidth },
        { value: "Marathon de Paris", width: nameWidth },
        { value: " ", width: catWidth },
        { value: "26.2 mi", width: distWidth },
        { value: "144 ft", width: elevWidth },
        { value: "0%", width: avgWidth },
        { value: "2:30:00", width: menWidth },
        { value: "3:00:00", width: womenWidth },
        { value: "3:36:40", width: myPrWidth },
        { value: "--", width: myGoalWidth },
      ],
    },
  ],
};
