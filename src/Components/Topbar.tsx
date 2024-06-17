import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { TFish } from "../types";
import { dataAllFish } from "../../data.fish";
import { useEffect, useState } from "react";
import { SearchBarSuggestionBox } from "./SearchBarSuggestionBox";

export const Topbar = ({
  isExtended,
  setOpenStatus,
  allFish,
  setAllFish,
}: {
  isExtended: boolean;
  setOpenStatus: {
    setExtended: (bool: boolean) => void;
  };
  allFish: TFish[];
  setAllFish: (fish: TFish[]) => void;
}) => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [fishSuggestions, setFishSuggestions] = useState<
    { fish: string; distance: number }[]
  >([]);

  const [fishQuery, setFishQuery] = useState("");
  const [filteredFish, setFilteredFish] = useState<TFish[]>([]);

  useEffect(() => {
    // Filter fish to search once value entered
    setFilteredFish(
      dataAllFish.filter((fish) =>
        fish.name.toLowerCase().includes(fishQuery.toLowerCase())
      )
    );
    // TODO: Fish suggestions don't suggest new fish when query is unintelligable && Clicking off search doesn't update query && Change suggestions to list for better accessibility
    setAllFish(filteredFish);
    // If no value in search revert to all fish
    if (fishQuery === "") {
      setAllFish(dataAllFish);
    }
    // get suggested and Show suggested Fish
    getCalculatedFish(fishQuery);
    if (fishSuggestions.length > 0) {
      setShowSuggestionBox(true);
    }
  }, [fishQuery]);

  // Levenshtein distance
  function levenshteinDistance(s1: string, s2: string) {
    const m = s1.length,
      n = s2.length;

    if (s2 === "") {
      return 0;
    }
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];
  }

  // Function to perform basic typo correction using Levenshtein distance
  function getCalculatedFish(query: string) {
    if (query === "") {
      setFishSuggestions([]);
    }
    const fishNames = dataAllFish.map((fish) => fish.name);
    const calculatedFish = allFish
      .map((fish) => fish.name)
      .map((fish) => {
        const distance = levenshteinDistance(
          fish.toLowerCase(),
          query.toLowerCase()
        );

        return { fish: fish, distance: distance };
      });

    const sortedFish = calculatedFish.sort((a, b) => a.distance - b.distance);

    if (
      fishNames.filter((fish) =>
        fish.toLowerCase().includes(query.toLowerCase())
      ).length > 0
    ) {
      setFishSuggestions(
        sortedFish.filter((suggestion) =>
          suggestion.fish.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFishSuggestions(sortedFish);
    }
  }

  return (
    <>
      <div className={`topbar ${isExtended && "topbar-down"}`}>
        <div className="topbar-nav-container">
          <div className="nav-btns">
            <button className="upload" id="fish-input"></button>
          </div>
        </div>
        <form
          className="search-form-container"
          onSubmit={(e) => {
            e.preventDefault();
            setAllFish(filteredFish.length > 0 ? filteredFish : allFish);
          }}
        >
          <button className="upload" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="4x" color="white" />
          </button>
          <div className="search-box-container">
            <input
              type="text"
              value={fishQuery}
              className="search-box"
              placeholder="Search For A Fish"
              onChange={(e) => {
                setFishQuery(e.target.value);
              }}
              // If not focused get rid of suggestion box
              // onBlur={() => setShowSuggestionBox(false)}
            />
            <SearchBarSuggestionBox
              showBar={showSuggestionBox}
              fishSuggestions={fishSuggestions}
              setFishQuery={(query: string) => setFishQuery(query)}
            />
          </div>
        </form>
        <button
          className={`topbar-button ${
            isExtended && "rotate-y-180 topbar-button-down"
          }`}
          onClick={() => {
            setOpenStatus.setExtended(isExtended);
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </>
  );
};
