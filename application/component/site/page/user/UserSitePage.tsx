// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./UserSitePage.module.css";
import UserSiteHeader from "../../header/user/UserSiteHeader";
import UserSiteFooter from "../../footer/user/UserSiteFooter";

// Parameters Interface
interface UserSitePageParameters {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

// Export Component
export default function UserSitePage({
  className = "",
  style = {},
  children,
}: UserSitePageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <div
      className={`${styles["container"]} ${{ className }}`}
      style={containerStyle}
    >
      <UserSiteHeader />
      <div className={styles["content"]}>{children}</div>
      <UserSiteFooter />
    </div>
  );
}
