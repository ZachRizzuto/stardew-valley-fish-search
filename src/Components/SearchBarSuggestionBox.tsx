export const SearchBarSuggestionBox = ({
  showBar,
  fishSuggestions,
  setFishQuery,
}: {
  showBar: boolean;
  fishSuggestions: { fish: string; distance: number }[];
  setFishQuery: (query: string) => void;
}) => {
  return (
    <>
      {
        <ul
          className={`suggestions-box ${showBar ? "pointer-events" : "hidden"}`}
        >
          {fishSuggestions.slice(0, 6).map((suggestion) => (
            <li
              className="suggestion"
              onClick={() => {
                setFishQuery(suggestion.fish);
              }}
              key={suggestion.fish}
            >
              {suggestion.fish}
            </li>
          ))}
        </ul>
      }
    </>
  );
};
