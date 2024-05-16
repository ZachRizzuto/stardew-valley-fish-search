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
    usedIn,
  } = Fish;

  return (
    <>
      <div className={"fishWrapper"}>
        <div className={"fishImgWrapper"}>
          <img src={imageUrl} alt={`picture of ${name}`} />
        </div>
        <div className={"fishDetailsWrapper"}>
          <div>name: {name}</div>
          <div className={`${location ? "block" : "hidden"}`}>
            location: {location}
          </div>
          <div>time: {time}</div>
          <div>season: {season}</div>
          <div>difficulty: {difficulty}</div>
          <div>weather: {weather}</div>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: ".3rem",
            }}
          >
            <div>sell price:</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".2rem",
                }}
              >
                <div>⭐</div>
                {sellPrice[0].map((price) => (
                  <div>{price}</div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".2rem",
                }}
              >
                <div>🌟</div>
                {sellPrice[1].map((price) => (
                  <div>{price}</div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".2rem",
                }}
              >
                <div>✨</div>
                {sellPrice[2].map((price) => (
                  <div>{price}</div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div>uses: </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {usedIn.length > 0
                ? usedIn.map((use) => <div>{use}</div>)
                : "Nothing"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
