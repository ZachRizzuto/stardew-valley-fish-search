import { useState } from "react";

export const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="container">
        <div
          style={{
            fontSize: "500%",
          }}
        >
          {number}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button onClick={() => setNumber(number + 1)}>Incremement</button>
          <button onClick={() => setNumber(number - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
};
