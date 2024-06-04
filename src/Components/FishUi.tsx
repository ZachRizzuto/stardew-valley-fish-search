import { useState } from "react";
import { TFish } from "../types";

export const FishUi = ({
  Fish,
  showModal,
  setShowModal,
}: {
  Fish: Omit<TFish, "id">;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}) => {
  const {
    imageUrl,
    name,
    description,
    difficulty,
    time,
    location,
    weather,
    season,
    sellPrice,
    usedIn,
  } = Fish;
  const [closingModal, setClosingModal] = useState(false);
  return (
    <>
      <div
        className={`fish-ui-wrapper ${showModal ? "modal-display" : ""} ${
          closingModal ? "modal-close" : ""
        }`}
      >
        <div className="fish-ui">
          <button
            onClick={() => {
              setClosingModal(true);
              setTimeout(() => {
                setShowModal(false);
              }, 1200);
            }}
          >
            ❌
          </button>
          <div className="fish-ui-img">
            <img src={imageUrl} alt="fish picture" />
          </div>
          <div className="fish-ui-details">
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
              <hr />
              <div>Difficulty: {difficulty}</div>
            </div>
            <div>When: {time}</div>
            <div>Where: {location}</div>
            <div>Weather: {weather}</div>
            <div>Season: {season}</div>
            <table>
              <tbody>
                <tr>
                  <td>Sell Prices</td>
                  <td>🐟</td>
                  <td>⭐</td>
                  <td>🌟</td>
                  <td>✨</td>
                </tr>
                <tr>
                  <td>Base</td>
                  <td>{sellPrice[0][0]}</td>
                  <td>{sellPrice[0][1]}</td>
                  <td>{sellPrice[0][2]}</td>
                  <td>{sellPrice[0][3]}</td>
                </tr>
                <tr>
                  <td>Fisher Profession</td>
                  <td>{sellPrice[1][0]}</td>
                  <td>{sellPrice[1][1]}</td>
                  <td>{sellPrice[1][2]}</td>
                  <td>{sellPrice[1][3]}</td>
                </tr>
                <tr>
                  <td>Angler Profession</td>
                  <td>{sellPrice[2][0]}</td>
                  <td>{sellPrice[2][1]}</td>
                  <td>{sellPrice[2][2]}</td>
                  <td>{sellPrice[2][3]}</td>
                </tr>
              </tbody>
            </table>
            <div>
              {usedIn.map((use) => (
                <div>{use}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
