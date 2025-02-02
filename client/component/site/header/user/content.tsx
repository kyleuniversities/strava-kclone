import { SiteDropdownData } from "../../util/dropdown/types";

export const dashboardDropdownData: SiteDropdownData = {
  dropdownId: "dashboard-dropdown",
  title: "Dashboard",
  sections: [
    {
      nodes: [
        {
          text: "Activity Feed",
          to: "/dashboard",
        },
        {
          text: "Clubs",
          to: "/clubs",
        },
        {
          text: "My Segments",
          to: "/segments",
        },
        {
          text: "My Routes",
          to: "/routes",
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
          to: "/training-calendar",
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
