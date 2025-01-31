// Imports
import { CSSProperties, ReactNode } from "react";

// Export Interface
export interface ContainerElement {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}
