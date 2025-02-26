import React, { useState } from "react";
import { Chessboard } from "react-chessboard"; // Correct import
import { Chess } from "chess.js"; // Correct import

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess()); // Initialize the game

  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to a queen for simplicity
    });

    // If the move is illegal, snap the piece back
    if (move === null) return false;

    // Update the game state
    setGame(new Chess(game.fen()));
    return true;
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <Chessboard position={game.fen()} onPieceDrop={onDrop} boardWidth={400} />
    </div>
  );
};

export default ChessBoard; // Export the component
