export const SearchBarSuggestionBox = ({
  showBar,
  fishSuggestions,
}: {
  showBar: boolean;
  fishSuggestions: { fish: string; distance: number }[];
}) => {
  return (
    <>
      {showBar && (
        <div className="suggestions-box">
          {fishSuggestions.map((suggestion) => (
            <div key={suggestion.fish}>{suggestion.fish}</div>
          ))}
        </div>
      )}
    </>
  );
};
