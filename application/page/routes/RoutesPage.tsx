// Use Client
"use client";

// Imports
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import styles from "./RoutesPage.module.css";
import UserSitePage from "@/component/site/page/user/UserSitePage";
import Text from "@/component/util/text/Text";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Spacer from "@/component/util/spacer/Spacer";
import Button from "@/component/util/button/Button";
import MapComponent from "@/component/util/map/MapComponent";
import RoutesInfoContainer from "./RoutesInfoContainer";
import RoutesListContainer from "./RoutesListContainer";
import CreateRoutesContainer from "./CreateRoutesContainer";

// Parameters Interface
interface RoutesPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function RoutesPage({
  className = "",
  style = {},
}: RoutesPageParameters) {
  // Use State Constants
  const [name, setName] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [method, setMethod] = useState<string>("Cycling");
  const [newMode, setNewMode] = useState<boolean>(true);

  // Helper Methods
  const wait = async (time: number) =>
    new Promise((resolve: (item: unknown) => void) => {
      setTimeout(() => resolve(0), time);
    });

  const toFullTag = (tag: string) => {
    return tag === "traffic" ? "driving-traffic" : tag;
  };

  const syncTextInput = async (inputId: string, value: string) => {
    const inputQuery: HTMLElement | null = document.getElementById(inputId);
    if (inputQuery) {
      const input: HTMLElement = inputQuery;
      const inputChild: HTMLInputElement = input.querySelector(
        "input",
      ) as HTMLInputElement;
      inputChild.value = value;
    }
  };

  const syncTabInput = (tag: string) => {
    const fullTag = toFullTag(tag);
    const inputId = `mapbox-directions-profile-${fullTag}`;
    const inputQuery: HTMLElement | null = document.getElementById(inputId);
    if (inputQuery) {
      const input: HTMLElement = inputQuery;
      input.click();
    }
  };

  // Handler Methods
  const handleSelectCard = async (card: any) => {
    setName(card.name);
    setOrigin(card.origin);
    setDestination(card.destination);
    setMethod(card.method);
    document.getElementById("create-route")?.scrollIntoView();
    setNewMode(false);
    await wait(50);
    syncTabInput(card.method.toLowerCase());
    await wait(50);
    await syncTextInput("mapbox-directions-origin-input", card.origin);
    await wait(50);
    await syncTextInput(
      "mapbox-directions-destination-input",
      card.destination,
    );
    await wait(50);
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <UserSitePage>
      <div
        className={`${styles["container"]} ${{ className }}}`}
        style={containerStyle}
      >
        <RoutesInfoContainer setNewMode={setNewMode} />
        <Spacer size={20} />
        <RoutesListContainer handleSelectCard={handleSelectCard} />
        <Spacer size={60} />
        <CreateRoutesContainer
          name={name}
          setName={setName}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          method={method}
          setMethod={setMethod}
          newMode={newMode}
          setNewMode={setNewMode}
        />
      </div>
    </UserSitePage>
  );
}
