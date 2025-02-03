// Use Client
"use client";

// Imports
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./MapComponent.module.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Text from "../text/Text";
import Button from "../button/Button";
import SidePadder from "../spacer/SidePadder";

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
  const [time, setTime] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const [bValue, setBValue] = useState<string>("");

  // Use Reference Constants
  const mapNode = useRef(null);

  // Handler Methods
  const handleSave = () => {
    const inputQuery: HTMLElement | null = document.getElementById(
      "mapbox-directions-destination-input",
    );
    const inputQuery2: HTMLElement | null = document.getElementById(
      "mapbox-directions-origin-input",
    );
    if (inputQuery && inputQuery2) {
      const input: HTMLElement = inputQuery;
      const input2: HTMLElement = inputQuery2;
      const inputs: NodeListOf<HTMLInputElement> =
        input.querySelectorAll("input");
      const inputs2: NodeListOf<HTMLInputElement> =
        input2.querySelectorAll("input");
      const values = [];
      for (let i = 0; i < inputs.length; i++) {
        const child: HTMLInputElement = inputs.item(i) as HTMLInputElement;
        values.push(child.innerHTML + "___" + child.value);
        const value = child.textContent;
      }
      for (let i = 0; i < inputs2.length; i++) {
        const child: HTMLInputElement = inputs2STA.item(i) as HTMLInputElement;
        child.value = "BB";
      }
      alert(
        `Save: L=${inputs.length} ${JSON.stringify(input.innerHTML)} >>>>> ${JSON.stringify(values)} + \"${input.textContent}\"`,
      );
    }
  };

  // Use Effects
  useEffect(() => {
    if (time < 10) {
      setTimeout(() => {
        const inputQuery: HTMLElement | null = document.getElementById(
          "mapbox-directions-destination-input",
        );
        if (inputQuery) {
          const input: HTMLElement = inputQuery;
          const children: HTMLCollection = input.children;
          for (let i = 0; i < children.length; i++) {
            const child: HTMLElement = children.item(i) as HTMLElement;
            child.addEventListener("change", (event: any) => {
              const element: any = event.target;
              const value = element.value;
              setValue(value);
              // alert(
              //   `child-${i}-value: ${value}; ${JSON.stringify(element.innerHTML)}`,
              // );
            });
          }
          // alert(`${time}: ${input.innerHTML}`);
        }
        setTime(time + 1);
      }, 1000);
    }
  }, [time]);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) {
      return;
    }
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.456453, 37.767663],
      zoom: 13,
    });
    const navigation = new mapboxgl.NavigationControl();
    const directions = new MapboxDirections({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      unit: "metric",
      profile: "mapbox/cycling",
    });
    mapboxMap.addControl(navigation, "top-right");
    mapboxMap.addControl(directions, "top-left");
    setMap(mapboxMap);
    return () => {
      mapboxMap.remove();
    };
  }, []);

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
    minHeight: Number(`${minHeight}`) + 150,
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
      <div className="flex">
        <Button variant="small" onClick={handleSave}>
          Save
        </Button>
        <Text size="soft-medium-large">VALUE: {value}</Text>
        <SidePadder size={60} />
        <Text size="soft-medium-large">B-VALUE: {bValue}</Text>
      </div>
      <div ref={mapNode} className={`${styles["map"]}`} style={mapStyle} />
    </div>
  );
}
