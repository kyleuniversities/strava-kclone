// Imports
import { CSSProperties } from "react";
import styles from "./SiteFooter.module.css";
import SiteFooterSocialContainer from "./SiteFooterSocialContainer";
import SiteFooterLinkList from "./SiteFooterLinkList";
import {
  newsOptionLinks,
  personalOptionLinks,
  routeOptionLinks,
  siteOptionLinks,
} from "./content";
import SidePadder from "@/component/util/spacer/SidePadder";

// Parameters Interface
interface SiteFooterParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SiteFooter({
  className = "",
  style = {},
}: SiteFooterParameters) {
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
      <SiteFooterSocialContainer />
      <SidePadder size="6%" />
      <SiteFooterLinkList links={siteOptionLinks} />
      <SiteFooterLinkList links={routeOptionLinks} />
      <SiteFooterLinkList links={newsOptionLinks} />
      <SiteFooterLinkList links={personalOptionLinks} />
    </div>
  );
}
