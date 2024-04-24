import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Topbar = ({
  isExtended,
  setOpenStatus,
}: {
  isExtended: boolean;
  setOpenStatus: {
    setExtended: (bool: boolean) => void;
  };
}) => {
  return (
    <>
      <div className={`topbar ${isExtended && "topbar-down"}`}>
        <div className="topbar-nav-container">
          <div className="nav-btns">
            <button className="upload" id="fish-input"></button>
            <button className="upload">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="4x"
                color="white"
              />
            </button>
          </div>
        </div>
        <div className="search-box-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search For A Fish"
          />
        </div>
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
