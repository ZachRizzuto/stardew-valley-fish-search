import { useEffect, useState } from "react";
import { Topbar } from "./Components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { dataAllFish } from "../data.fish";
import { Fish } from "./Components/Fish";
import { TFish } from "./types";

export const App = () => {
  const [allFish, setAllFish] = useState<TFish[]>(dataAllFish);
  const [topbarExtended, setTopbarExtended] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setIsLoading(true);
    // Requests.getFish()
    //   .then((fish) => {
    //     fish ? setAllFish(fish) : setAllFish(sampleFish);
    //   })
    //   .then(() => setIsLoading(false));
    setAllFish(allFish);
  }, [allFish]);

  return (
    <>
      <div className="background-img-wrapper"></div>
      <Topbar
        isExtended={topbarExtended}
        setOpenStatus={{
          setExtended: (topbarExtended) =>
            topbarExtended ? setTopbarExtended(false) : setTopbarExtended(true),
        }}
        allFish={allFish}
        setAllFish={(fish) => setAllFish(fish)}
      />
      <div className="page-container">
        <div className="fish-container">
          {isLoading ? (
            <div className="loading">
              <FontAwesomeIcon icon={faFish} />
            </div>
          ) : (
            ""
          )}
          {allFish.map((fish: TFish) => (
            <Fish
              name={fish.name}
              location={fish.location}
              imageUrl={fish.imageUrl}
              sellPrice={fish.sellPrice}
              time={fish.time}
              description={fish.description}
              season={fish.season}
              difficulty={fish.difficulty}
              weather={fish.weather}
              usedIn={fish?.usedIn}
              key={fish.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
