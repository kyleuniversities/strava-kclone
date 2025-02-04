// Imports
import { CSSProperties } from "react";
import styles from "./SiteFooterLinkList.module.css";
import { LinkText } from "./content";
import Link from "next/link";

// Parameters Interface
interface SiteFooterLinkListParameters {
  className?: string;
  style?: CSSProperties;
  links: LinkText[];
}

// Export Component
export default function SiteFooterLinkList({
  className = "",
  style = {},
  links,
}: SiteFooterLinkListParameters) {
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
      {links.map((link: LinkText) => (
        <div className={styles["link"]}>
          <Link href={link.href}>{link.text}</Link>
        </div>
      ))}
    </div>
  );
}
