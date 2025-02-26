import React from "react";
import ChessBoard from "./ChessBoard"; // Correct import
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>ChessMaster Pro</h1>
      <ChessBoard /> {/* Use the ChessBoard component */}
    </div>
  );
}

export default App;
