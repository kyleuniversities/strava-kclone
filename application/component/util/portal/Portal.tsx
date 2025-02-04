// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./Portal.module.css";
import FloatRightContainer from "../float/FloatRightContainer";
import SvgIcon from "../svg/SvgIcon";
import { CHEVRON_RIGHT_SVG_PATH } from "@/resource/svg";
import Link from "next/link";

// Parameters Interface
interface PortalParameters {
  className?: string;
  style?: CSSProperties;
  to: string;
  children: ReactNode;
}

// Export Component
export default function Portal({
  className = "",
  style = {},
  to,
  children,
}: PortalParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <Link href={to}>
      <div
        className={`${styles["container"]} ${className} flex-center`}
        style={containerStyle}
      >
        <div className={`${styles["text"]}`}>{children}</div>
        <FloatRightContainer>
          <SvgIcon>{CHEVRON_RIGHT_SVG_PATH}</SvgIcon>
        </FloatRightContainer>
      </div>
    </Link>
  );
}
