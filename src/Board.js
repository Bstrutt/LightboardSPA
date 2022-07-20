import React from "react";
import BoardLine from "./BoardLine.js";

const Board = props => {
  return (
    <table className="game-board">
      <thead>
        <tr>
          
        </tr>
      </thead>
      <tbody>
        {props.board.map((line, y) => {
          return (
            <BoardLine
              key={y}
              y={y}
              line={line}
              clickHandler={props.clickHandler}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;