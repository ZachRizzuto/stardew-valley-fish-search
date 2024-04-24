import { TFish } from "../types";
export const Fish = (Fish: Omit<TFish, "id">) => {
  const {
    name,
    location,
    time,
    imageUrl,
    sellPrice,
    description,
    season,
    difficulty,
    weather,
  } = Fish;

  return (
    <>
      <div className={"fishWrapper"}>
        <div className={"fishImgWrapper"}>
          <img src={imageUrl} alt={`picture of ${name}`} />
        </div>
        <div className={"fishDeatailsWrapper"}>
          <div>name: </div>
          <div>location: </div>
          <div>time: {time}</div>
          <div>season: {season}</div>
          <div>difficulty: {difficulty}</div>
          <div>weather: {weather}</div>
          <div>
            sellPrice:{" "}
            {sellPrice.flat().map((price) => (
              <div>{price}</div>
            ))}
          </div>
          <div>Uses: </div>
        </div>
      </div>
    </>
  );
};
