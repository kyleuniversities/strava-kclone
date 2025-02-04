// Imports
import { CSSProperties } from "react";
import styles from "./UserSiteFooterCopyrightContainer.module.css";
import SiteLogo from "../../logo/SiteLogo";
import Text from "@/component/util/text/Text";

// Parameters Interface
interface UserSiteFooterCopyrightContainerParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserSiteFooterCopyrightContainer({
  className = "",
  style = {},
}: UserSiteFooterCopyrightContainerParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}}`}
      style={containerStyle}
    >
      <SiteLogo colorScheme="gray" />
      <Text size="small">© 2025 Strava</Text>
    </div>
  );
}
