// Imports
import { ReactNode } from "react";

// Types
export interface IconCardContent {
  svgPath: ReactNode;
  title: string;
  description: string;
}

// Types
export interface LinkIconCardContent extends IconCardContent {
  to: string;
  text: string;
}
