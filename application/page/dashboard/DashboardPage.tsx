// Imports
import { CSSProperties } from "react";
import styles from "./DashboardPage.module.css";
import SitePage from "@/component/site/page/SitePage";
import UserSitePage from "@/component/site/page/user/UserSitePage";
import PersonalSection from "./personal/PersonalSection";
import EngagementSection from "./engagement/EngagementSection";
import SocialSection from "./social/SocialSection";

// Parameters Interface
interface DashboardPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function DashboardPage({
  className = "",
  style = {},
}: DashboardPageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <UserSitePage>
      <div
        className={`${styles["container"]} ${className} flex-center`}
        style={containerStyle}
      >
        <div className="flex w-full">
          <PersonalSection />
          <EngagementSection />
          <SocialSection />
        </div>
      </div>
    </UserSitePage>
  );
}
