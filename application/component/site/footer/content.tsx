import {
  FACEBOOK_SVG_PATH,
  INSTAGRAM_SVG_PATH,
  LINKEDIN_SVG_PATH,
  TWITTER_SVG_PATH,
  YOUTUBE_SVG_PATH,
} from "@/resource/svg";
import { ReactNode } from "react";

export interface LinkText {
  text: string;
  href: string;
  color?: string;
}

export const siteOptionLinks: LinkText[] = [
  {
    text: "Features",
    href: "#",
  },
  {
    text: "Subscription",
    href: "#",
  },
  {
    text: "Family Plan",
    href: "#",
  },
  {
    text: "Student Discount",
    href: "#",
  },
  {
    text: "Send a Gift",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
  {
    text: "Careers",
    href: "#",
  },
  {
    text: "Press",
    href: "#",
  },
];

export const routeOptionLinks: LinkText[] = [
  {
    text: "Routes",
    href: "#",
  },
];

export const newsOptionLinks: LinkText[] = [
  {
    text: "What's New",
    href: "#",
  },
  {
    text: "Stories",
    href: "#",
  },
  {
    text: "Support",
    href: "#",
  },
  {
    text: "Business",
    href: "#",
  },
  {
    text: "Partner Center",
    href: "#",
  },
  {
    text: "Terms",
    href: "#",
  },
];

export const personalOptionLinks: LinkText[] = [
  {
    text: "Privacy",
    href: "#",
  },
  {
    text: "Do Not Share My Personal Information",
    href: "#",
  },
  {
    text: "Log In",
    href: "#",
    color: "orange",
  },
];

export const socialIconPaths: ReactNode[] = [
  TWITTER_SVG_PATH,
  YOUTUBE_SVG_PATH,
  INSTAGRAM_SVG_PATH,
  LINKEDIN_SVG_PATH,
  FACEBOOK_SVG_PATH,
];
