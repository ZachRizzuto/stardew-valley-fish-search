import { TFish } from "../types";
export const FishSelect = (Fish: Omit<TFish, "id">) => {
  const { name, time, imageUrl, season } = Fish;

  return (
    <>
      <div className={"fishWrapper"}>
        <div className={"fishImgWrapper"}>
          <img src={imageUrl} alt={`picture of ${name}`} />
        </div>
        <div className={"fishDetailsWrapper"}>
          <h2>{name}</h2>
          <div>{time}</div>
          <div>{season}</div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
