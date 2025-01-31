import { SiteDropdownData } from "../../util/dropdown/types";

export const dashboardDropdownData: SiteDropdownData = {
  dropdownId: "dashboard-dropdown",
  title: "Dashboard",
  sections: [
    {
      nodes: [
        {
          text: "Activity Feed",
          to: "#",
        },
        {
          text: "Clubs",
          to: "#",
        },
        {
          text: "My Segments",
          to: "#",
        },
        {
          text: "My Routes",
          to: "#",
        },
      ],
    },
    {
      title: "SUBSCRIPTION",
      colorScheme: "gray",
      nodes: [
        {
          text: "My Goals",
          to: "#",
        },
      ],
    },
  ],
};

export const trainingDropdownData: SiteDropdownData = {
  dropdownId: "training-dropdown",
  title: "Training",
  sections: [
    {
      nodes: [
        {
          text: "Training Calendar",
          to: "#",
        },
        {
          text: "My Activities",
          to: "#",
        },
      ],
    },
    {
      title: "SUBSCRIPTION",
      colorScheme: "gray",
      nodes: [
        {
          text: "Training Log",
          to: "#",
        },
        {
          text: "Training Plans",
          to: "#",
        },
        {
          text: "Power Curve",
          to: "#",
        },
        {
          text: "Fitness & Freshness",
          to: "#",
        },
      ],
    },
  ],
};
