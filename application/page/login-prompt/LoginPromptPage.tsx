// Imports
import { CSSProperties } from "react";
import styles from "./LoginPromptPage.module.css";
import SitePage from "@/component/site/page/SitePage";
import Image from "next/image";
import Text from "@/component/util/text/Text";
import Spacer from "@/component/util/spacer/Spacer";
import Button from "@/component/util/button/Button";

// Parameters Interface
interface LoginPromptPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function LoginPromptPage({
  className = "",
  style = {},
}: LoginPromptPageParameters) {
  // XML Parameters
  const containerStyle: CSSProperties = {
    ...style,
  };

  // Return Component
  return (
    <SitePage>
      <div className={`${styles["container"]} flex`}>
        <div className={styles["image-container"]}>
          <img
            className={styles["image"]}
            src="/props/cycling.jpg"
            alt="Cycling"
          />
        </div>
        <div className={`${styles["prompt-container"]} flex-center`}>
          <div>
            <Text size="large">Community-Powered Motivation</Text>
            <Text>
              Track your progress and cheer each other on. Join over 100 million
              active people on Strava for free.
            </Text>
            <Spacer size={20} />
            <Text>Already a Member? Login In</Text>
            <Spacer size={20} />
            <Button to="dashboard">Sign Up With Email</Button>
            <Spacer size={20} />
            <Text>
              By signing up for Strava, you agree to the Terms of Service. View
              our Privacy Policy.
            </Text>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            className={styles["image"]}
            src="/props/running.jpg"
            alt="Running"
          />
        </div>
      </div>
    </SitePage>
  );
}
