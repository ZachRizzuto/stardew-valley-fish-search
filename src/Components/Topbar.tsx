import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { TFish } from "../types";
import { dataAllFish } from "../../data.fish";
import { useState } from "react";

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
  // Sample pre-defined list of fish species
  const fishSpecies = ["Salmon", "Trout", "Bass", "Tuna", "Cod", "Catfish"];

  // Function to calculate Levenshtein distance between two strings
  function levenshteinDistance(s1: string, s2: string) {
    const m = s1.length,
      n = s2.length;
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
  function getTopSevenCalculatedFish(query: string) {
    // const closestMatch = allFish
    //   .map((fish) => fish.name)
    //   .reduce(
    //     (closest, fish) => {
    //       const distance = levenshteinDistance(
    //         fish.toLowerCase(),
    //         query.toLowerCase()
    //       );
    //       return distance < closest.distance ? { fish, distance } : closest;
    //     },
    //     { fish: null, distance: Infinity }
    //   );

    // use levenshtein distance to get fish then pair value with names
    const calculatedFish = allFish
      .map((fish) => fish.name)
      .map((fish) => {
        const distance = levenshteinDistance(
          fish.toLowerCase(),
          query.toLowerCase()
        );

        return { fish: fish, distance: distance };
      });

    const sortedFish = calculatedFish
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 7);

    return sortedFish;
  }

  const [filteredFish, setFilteredFish] = useState<TFish[]>([]);
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
              className="search-box"
              placeholder="Search For A Fish"
              onChange={(e) => {
                const value = e.target.value.toLowerCase();
                setFilteredFish(
                  dataAllFish.filter((fish) =>
                    fish.name.toLowerCase().includes(value)
                  )
                );
                if (value === "") {
                  setAllFish(dataAllFish);
                }
                console.log(getTopSevenCalculatedFish(e.target.value));
              }}
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
