// Imports
import { CSSProperties } from "react";
import styles from "./UserSiteFooterLinkList.module.css";
import { LinkText } from "../content";
import Link from "next/link";
import Text from "@/component/util/text/Text";
import Spacer from "@/component/util/spacer/Spacer";

// Parameters Interface
interface UserSiteFooterLinkListParameters {
  className?: string;
  style?: CSSProperties;
  title: string;
  links: LinkText[];
}

// Export Component
export default function UserSiteFooterLinkList({
  className = "",
  style = {},
  title,
  links,
}: UserSiteFooterLinkListParameters) {
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
      <Text size="medium-small">{title}</Text>
      <Spacer size={15} />
      {links.map((link: LinkText) => (
        <div className={styles["link"]}>
          <Link href={link.href}>{link.text}</Link>
        </div>
      ))}
    </div>
  );
}
