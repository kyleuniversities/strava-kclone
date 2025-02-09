import { SiteDropdownData } from "@/component/site/util/dropdown/types";
import { toIndexText } from "@/helper/string";

export enum ClubType {
  JUST_FOR_FUN,
  EMPLOYEE_GROUP,
}

export const clubTypeStrings = ["JUST_FOR_FUN", "EMPLOYEE_GROUP"];

export interface Club {
  src: string;
  name: string;
  location: string;
  joinable: boolean;
  members: number;
  sportType: string;
  clubType: ClubType;
}

export const sportTypeData: SiteDropdownData = {
  dropdownId: "sport-type-dropdown",
  title: "All",
  sections: [
    {
      nodes: [
        {
          text: "All",
        },
        {
          text: "Cycling",
        },
        {
          text: "Running",
        },
        {
          text: "Swimming",
        },
        {
          text: "Triathlon",
        },
        {
          text: "Alpine Skiing",
        },
        {
          text: "Backcountry Skiing",
        },
        {
          text: "Canoeing",
        },
        {
          text: "Crossfit",
        },
        {
          text: "E-Biking",
        },
        {
          text: "Elliptical",
        },
        {
          text: "Football",
        },
        {
          text: "Golf",
        },
        {
          text: "Hand Cycling",
        },
        {
          text: "Hiking",
        },
        {
          text: "Ice Skating",
        },
        {
          text: "Inline Cycling",
        },
        {
          text: "Kayaking",
        },
        {
          text: "Kitesurfing",
        },
        {
          text: "Nordic Skiing",
        },
        {
          text: "Rock Climbing",
        },
        {
          text: "Roller Skating",
        },
        {
          text: "Rowing",
        },
        {
          text: "Run / Walk / Hike",
        },
        {
          text: "Sailing",
        },
        {
          text: "Skateboarding",
        },
      ],
    },
  ],
};

const placeholderLocations = [
  "San Francisco, California",
  "Nonthaburi, Thailand",
  "Hong Kong, China",
];

const placeholderSportTypes = [
  "Running",
  "Skiing",
  "Cycling",
  "Swimming",
  "Rowing",
  "Kayaking",
  "Hiking",
];

const makePlaceholderClubs = () => {
  const clubs: Club[] = [];
  for (let i = 0; i < 60; i++) {
    clubs.push({
      src: "/props/club-skiing.jpg",
      name: `Club #${toIndexText(i)}`,
      location: placeholderLocations[i % 3],
      joinable: i % 7 <= 1 || i % 7 == 3,
      members: Math.floor(Math.random() * 10),
      sportType: placeholderSportTypes[i % placeholderSportTypes.length],
      clubType: i % 3 === 2 ? ClubType.EMPLOYEE_GROUP : ClubType.JUST_FOR_FUN,
    });
  }
  return clubs;
};

export const clubs = makePlaceholderClubs();
