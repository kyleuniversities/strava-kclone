// Use Client
"use client";

// Imports
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./MapComponent.module.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Parameters Interface
interface MapComponentParameters {
  className?: string;
  style?: CSSProperties;
  minHeight: number | string;
}

// Export Component
export default function MapComponent({
  className = "",
  style = {},
  minHeight,
}: MapComponentParameters) {
  // Use State Constants
  const [map, setMap] = useState<mapboxgl.Map>();

  // Use Reference Constants
  const mapNode = useRef(null);

  // Use Effects
  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) {
      return;
    }
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
    setMap(mapboxMap);
    return () => {
      mapboxMap.remove();
    };
  }, []);

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    minHeight,
  };
  const mapStyle: CSSProperties = {
    minHeight,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <div ref={mapNode} className={`${styles["map"]}`} style={mapStyle} />
    </div>
  );
}
