// Imports
import { CSSProperties, ReactNode } from "react";
import styles from "./SegmentsPage.module.css";
import UserSitePage from "@/component/site/page/user/UserSitePage";
import Text from "@/component/util/text/Text";
import TextTabPanel from "@/component/site/util/tab/TextTabPanel";
import StarredSegmentsTab from "./starred/StarredSegmentsTab";
import CreatedSegmentsTab from "./created/CreatedSegmentsTab";
import HiddenSegmentsTab from "./hidden/HiddenSegmentsTab";
import ExploreSegmentsTab from "./explore/ExploreSegmentsTab";
import Spacer from "@/component/util/spacer/Spacer";

// Parameters Interface
interface SegmentsPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function SegmentsPage({
  className = "",
  style = {},
}: SegmentsPageParameters) {
  // XML Parameters
  const tabs = [
    "Starred Segments",
    "Created Segments",
    "Hidden Segments",
    "Explore Segments",
  ];
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
            <Text size="large">My Segments</Text>
          </div>
        </div>
        <Spacer size={10} />
        <TextTabPanel tabs={tabs} className="w-full">
          <StarredSegmentsTab />
          <CreatedSegmentsTab />
          <HiddenSegmentsTab />
          <ExploreSegmentsTab />
        </TextTabPanel>
      </div>
    </UserSitePage>
  );
}
