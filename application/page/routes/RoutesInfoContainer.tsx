// Imports
import { CSSProperties, Dispatch, SetStateAction } from "react";
import styles from "./RoutesInfoContainer.module.css";
import Spacer from "@/component/util/spacer/Spacer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Button from "@/component/util/button/Button";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import Text from "@/component/util/text/Text";

// Parameters Interface
interface RoutesInfoContainerParameters {
  className?: string;
  style?: CSSProperties;
  setNewMode: Dispatch<SetStateAction<boolean>>;
}

// Export Component
export default function RoutesInfoContainer({
  className = "",
  style = {},
  setNewMode,
}: RoutesInfoContainerParameters) {
  // Handler Methods
  const handleNewRoute = () => {
    setNewMode(true);
    document.getElementById("create-route")?.scrollIntoView();
  };

  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div className="flex w-full">
      <div>
        <Text size="large">My Routes</Text>
        <Spacer size={10} />
        <Text size="soft-medium-small">
          Learn more about{" "}
          <LinkSpan href="#" colorScheme="blue">
            sharing & exporting routes
          </LinkSpan>{" "}
          to a variety of devices.
        </Text>
        <Spacer size={15} />
        <div className={`${styles["button"]}`}>
          <Button id="new-route-btn" onClick={handleNewRoute}>
            New Route
          </Button>
        </div>
      </div>
      <FloatRightContainer>
        <img
          src="/props/map-computer-background.png"
          className={`${styles["map-image"]}`}
        />
      </FloatRightContainer>
    </div>
  );
}
