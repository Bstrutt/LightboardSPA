import React, { useEffect, useReducer, useState } from "react";
import { Hold } from "./Hold";
import _ from "lodash";
import { getNextGeneration } from "./Board.util";

type GameAction = {
  type: string;
  rowNum: number;
  colNum: number;
};

function reducer(state: boolean[][], action: GameAction) {
  const { type, rowNum, colNum } = action;
  const numRows = state.length;
  const numCols = state[0].length;
  let nextGeneration: boolean[][] = Array(numRows)
    .fill(false)
    .map((_) => {
      return new Array(numCols).fill(false);
    });
  switch (type) {
    case "toggle":
      nextGeneration = _.cloneDeep(state);
      nextGeneration[rowNum][colNum] = !state[rowNum][colNum];
      return nextGeneration;
    case "refresh":
      nextGeneration = getNextGeneration(state);
      return nextGeneration;
    default:
      throw new Error();
  }
}

const Board: React.FC<{ dimension: number; lifespan: number }> = ({
  dimension,
  lifespan,
}) => {
  const numRows = dimension;
  const numCols = dimension;
  let [generationNum, setGenerationNum] = useState(0);

  // creates next generation
  const [generation, dispatch] = useReducer(
    reducer,
    Array(numRows)
      .fill(0)
      .map((_) => {
        return new Array(numCols).fill(false);
      })
  );

  // lifespan interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGenerationNum(generationNum + 1);
      dispatch({ type: "refresh", rowNum: 0, colNum: 0 });
    }, lifespan);

    return () => clearInterval(interval);
  });

  return (
    <div>
      {generation.map((row, rowNum) => (
        <div className="flex" key={`row${rowNum}`}>
          {row.map((isAlive, colNum) => (
            <Hold
              isAlive={isAlive}
              toggleIsAlive={() =>
                dispatch({ type: "toggle", rowNum: rowNum, colNum: colNum })
              }
              key={`row${rowNum}col${colNum}`}
            ></Hold>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Board };
