// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./IconCard.module.css";
import SvgIcon from "../svg/SvgIcon";
import InfoContainer from "../data/InfoContainer";

// Parameters Interface
interface IconCardParameters {
  className?: string;
  style?: CSSProperties;
  contentWidth?: number;
  title: string;
  description: string;
  svgPath: ReactNode;
  children: ReactNode;
}

// Export Component
export default function IconCard({
  className = "",
  style = {},
  contentWidth = 60,
  title,
  description,
  svgPath,
  children,
}: IconCardParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className} flex`}
      style={containerStyle}
    >
      <div className={`${styles["icon"]}`}>
        <SvgIcon size={contentWidth}>{svgPath}</SvgIcon>
      </div>
      <div className={`${styles["info"]}`}>
        <InfoContainer title={title} description={description}>
          {children}
        </InfoContainer>
      </div>
    </div>
  );
}
