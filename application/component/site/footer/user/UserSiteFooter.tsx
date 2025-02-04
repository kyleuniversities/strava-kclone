// Imports
import { CSSProperties } from "react";
import styles from "./UserSiteFooter.module.css";
import UserSiteFooterCopyrightContainer from "./UserSiteFooterCopyrightContainer";
import UserSiteFooterLinkList from "./UserSiteFooterLinkList";
import SidePadder from "@/component/util/spacer/SidePadder";
import {
  aboutOptionLinks,
  exploreOptionLinks,
  followOptionLinks,
  helpOptionLinks,
  moreOptionLinks,
} from "./content";

// Parameters Interface
interface UserSiteFooterParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function UserSiteFooter({
  className = "",
  style = {},
}: UserSiteFooterParameters) {
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
      <UserSiteFooterCopyrightContainer />
      <SidePadder size="1%" />
      <UserSiteFooterLinkList title="About" links={aboutOptionLinks} />
      <UserSiteFooterLinkList title="Explore" links={exploreOptionLinks} />
      <UserSiteFooterLinkList title="Follow" links={followOptionLinks} />
      <UserSiteFooterLinkList title="Help" links={helpOptionLinks} />
      <UserSiteFooterLinkList title="More" links={moreOptionLinks} />
    </div>
  );
}
