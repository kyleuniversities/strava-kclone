// Imports
import { CSSProperties } from "react";
import styles from "./RoutesPage.module.css";
import UserSitePage from "@/component/site/page/user/UserSitePage";
import Text from "@/component/util/text/Text";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import LinkSpan from "@/component/util/text/span/LinkSpan";
import Spacer from "@/component/util/spacer/Spacer";
import Button from "@/component/util/button/Button";
import MapComponent from "@/component/util/map/MapComponent";

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
              <Button to="#">View on Map</Button>
            </div>
          </div>
          <FloatRightContainer>
            <img
              src="/props/map-computer-background.png"
              className={`${styles["map-image"]}`}
            />
          </FloatRightContainer>
        </div>
        <div>Z</div>
        <div
          style={{
            width: "100%",
            minHeight: "300px",
            border: "1px solid black",
          }}
        >
          <MapComponent minHeight="300px" />
        </div>
      </div>
    </UserSitePage>
  );
}
