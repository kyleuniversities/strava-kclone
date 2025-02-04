// Use Client
"use client";

// Imports
import { CSSProperties, useEffect, useState } from "react";
import styles from "./RoutesListContainer.module.css";
import { getAllRoutes } from "@/api/routes";
import { splitArray } from "@/helper/array";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";

// Parameters Interface
interface RoutesListContainerParameters {
  className?: string;
  style?: CSSProperties;
  handleSelectCard: (card: any) => void;
}

// Export Component
export default function RoutesListContainer({
  className = "",
  style = {},
  handleSelectCard,
}: RoutesListContainerParameters) {
  // Use State Constants
  const [routes, setRoutes] = useState<any[]>([]);

  // Use Effects
  useEffect(() => {
    getAllRoutes().then((res) => {
      setRoutes(res.data);
    });
  }, []);

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      {splitArray(routes, 3).map((cardGroup: any[]) => (
        <div className={`${styles["card-group"]}`}>
          {cardGroup.map((card: any) => (
            <div
              className={`${styles["card"]}`}
              onClick={() => handleSelectCard(card)}
            >
              <div className={`${styles["card-image"]}`}>
                <img
                  src="/props/map-background.png"
                  className={`${styles["image"]}`}
                />
              </div>
              <div className={`${styles["card-info"]}`}>
                <div className={`flex`}>
                  <div className={`${styles["card-title"]}`}>{card.name}</div>
                  <FloatRightContainer>
                    <div className={`${styles["card-date"]}`}>{card.date}</div>
                  </FloatRightContainer>
                </div>

                <div className={`${styles["card-subtitle"]}`}>
                  {card.origin}
                </div>
                <div className={`${styles["card-subtitle"]}`}>
                  {card.destination}
                </div>
                <div className={`${styles["card-subtitle"]}`}>
                  {card.method}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
