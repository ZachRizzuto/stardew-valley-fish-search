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
      {showBar && (
        <div className="suggestions-box">
          {fishSuggestions.slice(0, 6).map((suggestion) => (
            <div
              className="suggestion"
              onClick={() => {
                setFishQuery(suggestion.fish);
              }}
              key={suggestion.fish}
            >
              {suggestion.fish}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
