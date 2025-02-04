// Use Client
"use client";

// Imports
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./CreateRoutesContainer.module.css";
import MapComponent from "@/component/util/map/MapComponent";
import Text from "@/component/util/text/Text";
import LabeledTextField from "@/component/util/input/label/LabeledTextField";
import Spacer from "@/component/util/spacer/Spacer";
import Button from "@/component/util/button/Button";
import { fullRequest } from "@/api";
import { createRoute } from "@/api/routes";
import LabeledText from "@/component/util/input/label/LabeledText";

// Parameters Interface
interface CreateRoutesContainerParameters {
  className?: string;
  style?: CSSProperties;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  origin: string;
  setOrigin: Dispatch<SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  method: string;
  setMethod: Dispatch<SetStateAction<string>>;
  newMode: boolean;
  setNewMode: Dispatch<SetStateAction<boolean>>;
}

// Export Component
export default function CreateRoutesContainer({
  className = "",
  style = {},
  name,
  setName,
  origin,
  setOrigin,
  destination,
  setDestination,
  method,
  setMethod,
  newMode,
  setNewMode,
}: CreateRoutesContainerParameters) {
  const [syncAttempts, setSyncAttempts] = useState<number>(0);
  const [isSynced, setIsSynced] = useState<boolean>(false);

  // Helper Functions
  const toFullTag = (tag: string) => {
    return tag === "traffic" ? "driving-traffic" : tag;
  };

  const syncTextInput = (
    inputId: string,
    setValue: Dispatch<SetStateAction<string>>,
  ) => {
    const inputQuery: HTMLElement | null = document.getElementById(inputId);
    if (inputQuery) {
      const input: HTMLElement = inputQuery;
      const children = input.children;
      for (let i = 0; i < children.length; i++) {
        const child: HTMLElement = children.item(i) as HTMLElement;
        child.addEventListener("change", (event: any) => {
          const element: any = event.target;
          const value = element.value;
          setValue(value);
        });
      }
    }
  };

  const syncTabInput = (tag: string) => {
    const fullTag = toFullTag(tag);
    const inputId = `mapbox-directions-profile-${fullTag}`;
    const inputQuery: HTMLElement | null = document.getElementById(inputId);
    if (inputQuery) {
      const input: HTMLElement = inputQuery;
      input.addEventListener("change", (event: any) => {
        const newMethod = tag;
        setMethod(newMethod[0].toUpperCase() + newMethod.substring(1));
      });
    }
  };

  // Use Effects
  useEffect(() => {
    if (!isSynced && syncAttempts < 3) {
      setTimeout(() => {
        syncTextInput("mapbox-directions-origin-input", setOrigin);
        syncTextInput("mapbox-directions-destination-input", setDestination);
        syncTabInput("cycling");
        syncTabInput("traffic");
        syncTabInput("driving");
        syncTabInput("walking");
        setSyncAttempts(syncAttempts + 1);
        setIsSynced(true);
      }, 200);
    }
  }, [isSynced, syncAttempts]);

  // Handler Methods
  const handleSave = () => {
    if (!origin || !destination) {
      alert("Please enter a Name, Start point, and End point on the Map");
      return;
    }
    const routeBody = {
      name,
      date: new Date().toDateString().substring(4),
      origin,
      destination,
      method,
    };
    createRoute(routeBody).then(() => {
      window.location.reload();
    });
  };

  const handleCreationMode = () => {
    setNewMode(true);
  };

  // XML Parameters
  const minHeight = "32.5vw";
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      id="create-route"
      className={`${styles["container"]} ${className}`}
      style={containerStyle}
    >
      <Text size="large">{newMode ? "Create New" : "View"} Route</Text>
      <div className={`${styles["field-container"]}`}>
        <div className={`${styles["field-group"]}`}>
          <div className={`${styles["distance-field"]} ${styles["field"]}`}>
            <LabeledTextField
              id="route-name"
              labelText="Route Name"
              placeholder="Enter a Name"
              width="78vw"
              value={name}
              setValue={setName}
            />
          </div>
        </div>
        <div id="fg1" className={`${styles["field-group"]}`}>
          <div className={`${styles["distance-field"]} ${styles["field"]}`}>
            <LabeledText
              labelText="Start Place"
              placeholder="Start Place"
              width="26vw"
              value={origin}
              setValue={() => {}}
            />
          </div>
          <div className={`${styles["elev-field"]} ${styles["field"]}`}>
            <LabeledText
              labelText="End Place"
              placeholder="End Place"
              width="26vw"
              value={destination}
              setValue={() => {}}
            />
          </div>
          <div className={`${styles["avg-grades-field"]} ${styles["field"]}`}>
            <LabeledText
              labelText="Travel Type"
              placeholder="Travel Type"
              width="26vw"
              value={method}
              setValue={() => {}}
            />
          </div>
        </div>
      </div>
      <Spacer size={20} />
      {newMode ? (
        <div className={`${styles["button"]}`}>
          <Button onClick={handleSave}>Save Route</Button>
        </div>
      ) : (
        <div className={`${styles["button-creation"]}`}>
          <Button onClick={handleCreationMode}>Go to Creation Mode</Button>
        </div>
      )}
      <Spacer size={20} />
      <div
        style={{
          width: "100%",
          minHeight,
          border: "1px solid black",
        }}
      >
        <MapComponent minHeight={minHeight} />
      </div>
    </div>
  );
}
