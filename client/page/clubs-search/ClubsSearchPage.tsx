// Use Client
"use client";

// Imports
import { CSSProperties, useState } from "react";
import styles from "./ClubsSearchPage.module.css";
import UserSitePage from "@/component/site/page/user/UserSitePage";
import Text from "@/component/util/text/Text";
import FloatRightContainer from "@/component/util/float/FloatRightContainer";
import Button from "@/component/util/button/Button";
import LabeledTextField from "@/component/util/input/label/LabeledTextField";
import LabeledDropdown from "@/component/util/input/label/LabeledDropdown";
import { Club, clubs, clubTypeStrings, sportTypeData } from "./content";
import Spacer from "@/component/util/spacer/Spacer";
import SidePadder from "@/component/util/spacer/SidePadder";
import LabeledButton from "@/component/util/input/label/LabeledButton";
import { joinSentenceCase, splitMacroCase } from "@/helper/string";
import { useSearchParams } from "next/navigation";
import { toIndexArray } from "@/helper/array";
import Link from "next/link";

// Parameters Interface
interface ClubsSearchPageParameters {
  className?: string;
  style?: CSSProperties;
}

// Export Component
export default function ClubsSearchPage({
  className = "",
  style = {},
}: ClubsSearchPageParameters) {
  // Constant
  const pageTag = "page";

  // Search Parameters Constants
  const searchParams = useSearchParams();
  const pageIndex =
    searchParams && searchParams.has(pageTag)
      ? Number(searchParams.get(pageTag)) - 1
      : 0;

  // Use State Constants
  const [clubName, setClubName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [sportType, setSportType] = useState<string>("Running");

  // XML Parameters
  const pageAmount = 10;
  const numberOfPages = Math.ceil(clubs.length / pageAmount);
  const listedClubs = clubs.slice(
    Math.min(pageIndex * pageAmount, clubs.length),
    Math.min((pageIndex + 1) * pageAmount, clubs.length),
  );
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
          <div>
            <Text size="large">Clubs</Text>
          </div>
          <FloatRightContainer>
            <Button to="#" colorScheme="black">
              Create Club
            </Button>
          </FloatRightContainer>
        </div>
        <Spacer size={20} />
        <div className={`${styles["search-form"]} flex`}>
          <div className="flex-center">
            <LabeledTextField
              labelText="Club Name"
              placeholder="Enter a Club Name"
              value={clubName}
              setValue={setClubName}
            />
            <SidePadder size={20} />
            <LabeledTextField
              labelText="Location"
              placeholder="Enter a Location"
              value={location}
              setValue={setLocation}
            />
            <SidePadder size={20} />
            <LabeledDropdown
              labelText="Sport Type"
              value={sportType}
              setValue={setSportType}
              dropdownData={sportTypeData}
              maxHeight="50vh"
              nodePadding={10}
            />
            <SidePadder size={20} />
            <LabeledButton labelText=" " variant="small" colorScheme="white">
              Search
            </LabeledButton>
          </div>
        </div>
        <Spacer size={20} />
        {listedClubs.length > 0 ? (
          <>
            <div className={`${styles["club-list"]}`}>
              {listedClubs.map((club: Club) => (
                <div className={`${styles["club"]} flex`}>
                  <img src={club.src} className={`${styles["image"]}`} />
                  <SidePadder size={10} />
                  <div className={`${styles["club-title"]}`}>
                    <Text size="medium-large">{club.name}</Text>
                    <Text size="soft-medium-small">{club.location}</Text>
                  </div>
                  <SidePadder size={"20%"} />
                  <div className={`${styles["member"]}`}>
                    <Text size="soft-medium-small">{club.members}</Text>
                  </div>
                  <SidePadder size={"10%"} />
                  <div className={`${styles["sport-type"]}`}>
                    <Text size="soft-medium-small">{club.sportType}</Text>
                  </div>
                  <SidePadder size={"10%"} />
                  <div className={`${styles["type"]}`}>
                    <Text size="soft-medium-small">
                      {joinSentenceCase(
                        splitMacroCase(clubTypeStrings[club.clubType]),
                      )}
                    </Text>
                  </div>
                  <SidePadder size={"10%"} />
                  <div className={`${styles["type"]}`}>
                    {club.joinable && <Button to="#">Join</Button>}
                  </div>
                </div>
              ))}
            </div>
            <div className={`w-full flex-center`}>
              <div className={`${styles["pagination-container"]} flex-center`}>
                <Link
                  className={`${styles["pagination-card-link"]}`}
                  href={`/clubs?page=${Math.max(pageIndex, 1)}`}
                >
                  <div className={`${styles["pagination-card"]}`}>←</div>
                </Link>
                {toIndexArray(numberOfPages).map((index: number) => (
                  <Link
                    className={`${styles["pagination-card-link"]}`}
                    href={`/clubs?page=${index + 1}`}
                  >
                    <div
                      className={`${styles["pagination-card"]} ${pageIndex === index ? styles["active"] : ""}`}
                    >
                      {index + 1}
                    </div>
                  </Link>
                ))}
                <Link
                  className={`${styles["pagination-card-link"]}`}
                  href={`/clubs?page=${Math.min(pageIndex + 2, numberOfPages)}`}
                >
                  <div className={`${styles["pagination-card"]}`}>→</div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div>No results found</div>
        )}
      </div>
    </UserSitePage>
  );
}
