import { useState } from "react";
import { TFish } from "../types";
import { FishUi } from "./FishUi";
export const Fish = (Fish: Omit<TFish, "id">) => {
  const { name, time, imageUrl, season } = Fish;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={"fishWrapper"} onClick={() => setShowModal(true)}>
        <div className={"fishImgWrapper"}>
          <img src={imageUrl} alt={`picture of ${name}`} />
        </div>
        <div className={"fishDetailsWrapper"}>
          <h2>{name}</h2>
          <div>{time}</div>
          <div>{season}</div>
        </div>
      </div>
      {showModal && (
        <FishUi
          Fish={Fish}
          showModal={showModal}
          setShowModal={(show: boolean) => setShowModal(show)}
        />
      )}
    </>
  );
};
