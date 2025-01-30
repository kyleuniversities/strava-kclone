// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./SiteFooterSocialContainer.module.css";
import SiteLogo from "../logo/SiteLogo";
import Spacer from "@/component/util/spacer/Spacer";
import AppStorePrompt from "@/component/util/app-prompts/AppStorePrompt";
import GooglePlayPrompt from "@/component/util/app-prompts/GooglePlayPrompt";
import Text from "@/component/util/text/Text";
import { socialIconPaths } from "./content";
import SvgIcon from "@/component/util/svg/SvgIcon";

// Parameters Interface
interface SiteFooterSocialContainerParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SiteFooterSocialContainer({
  className = "",
  style = {},
}: SiteFooterSocialContainerParameters) {
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
      <SiteLogo />
      <Spacer size={30} />
      <AppStorePrompt />
      <GooglePlayPrompt />
      <Spacer size={50} />
      <Text>Strava protects your data.</Text>
      <Text>Read more in our Privacy Policy.</Text>
      <Spacer size={30} />
      <div className="flex">
        {socialIconPaths.map((socialIconPath: ReactNode) => (
          <div className={styles["social-icon"]}>
            <SvgIcon size={24}>{socialIconPath}</SvgIcon>
          </div>
        ))}
      </div>
    </div>
  );
}
