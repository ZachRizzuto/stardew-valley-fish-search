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
                setAllFish(filteredFish.length > 0 ? filteredFish : allFish);
                if (value === "") {
                  setAllFish(dataAllFish);
                }
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
