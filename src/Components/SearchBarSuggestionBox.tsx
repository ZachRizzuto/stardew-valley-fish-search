import { dataAllFish } from "../../data.fish";
export const SearchBarSuggestionBox = ({
  showBar,
  fishSuggestions,
  setFishQuery,
  fishQuery,
}: {
  showBar: boolean;
  fishSuggestions: { fish: string; distance: number }[];
  setFishQuery: (query: string) => void;
  fishQuery: string;
}) => {
  return (
    <>
      {
        <ul
          className={`suggestions-box ${showBar ? "pointer-events" : "hidden"}`}
        >
          {fishSuggestions.length > 0 ? (
            fishSuggestions.slice(0, 6).map((suggestion) => (
              <li
                className="suggestion"
                onClick={() => {
                  setFishQuery(suggestion.fish);
                }}
                key={suggestion.fish}
              >
                {suggestion.fish}
              </li>
            ))
          ) : (
            <>
              <li>Did you mean:</li>
              {fishQuery &&
                dataAllFish
                  .filter(
                    (fish) =>
                      fish.name[0].toLowerCase() === fishQuery[0].toLowerCase()
                  )
                  .map((fish) => (
                    <li
                      className="suggestion"
                      onClick={() => {
                        setFishQuery(fish.name);
                      }}
                      key={fish.name}
                    >
                      {fish.name}
                    </li>
                  ))}
            </>
          )}
        </ul>
      }
    </>
  );
};
