// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./ImageCard.module.css";
import InfoContainer from "../data/InfoContainer";
import SidePadder from "../spacer/SidePadder";

// Parameters Interface
interface ImageCardParameters {
  className?: string;
  style?: CSSProperties;
  title: string;
  description: string;
  src: string;
  width: number | string;
  paddingX?: number;
  children: ReactNode;
}

// Export Component
export default function ImageCard({
  className = "",
  style = {},
  title,
  description,
  src,
  width,
  paddingX = 1,
  children,
}: ImageCardParameters) {
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
      <div className={`${styles["image"]} flex-center`}>
        <img src={src} width={width} />
      </div>
      <SidePadder size={paddingX} />
      <div className={`${styles["info"]}`}>
        <InfoContainer title={title} description={description}>
          {children}
        </InfoContainer>
      </div>
    </div>
  );
}
