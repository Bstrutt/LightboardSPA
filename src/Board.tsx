import React, { useEffect, useReducer, useState } from "react";
import { Hold } from "./Hold";
import _ from "lodash";
import { HoldStatusEnum } from "./Enums";

type HoldLocation = {
  rowNum: number;
  colNum: number;
};

function reducer(
  currentBoardStatus: HoldStatusEnum[][],
  holdLocation: HoldLocation
) {
  const { rowNum, colNum } = holdLocation;
  const numRows = currentBoardStatus.length;
  const numCols = currentBoardStatus[0].length;
  let updatedBoard: HoldStatusEnum[][] = Array(numRows)
    .fill(HoldStatusEnum.Default)
    .map((_) => {
      return new Array(numCols).fill(HoldStatusEnum.Default);
    });

  updatedBoard = _.cloneDeep(currentBoardStatus);
  // TODO how to loop through an enum? set to next available enum
  // nextGeneration[rowNum][colNum] = !state[rowNum][colNum];
  return updatedBoard;
}

const Board: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const numCols = width;
  const numRows = height;

  // creates next generation
  const [generation, dispatch] = useReducer(
    reducer,
    Array(numRows)
      .fill(0)
      .map((_) => {
        return new Array(numCols).fill(HoldStatusEnum.Default);
      })
  );

  return (
    <div>
      {generation.map((row, rowNum) => (
        <div className="flex" key={`row${rowNum}`}>
          {row.map((holdStatus, colNum) => (
            <Hold
              holdStatus={holdStatus}
              toggleHoldStatus={() =>
                dispatch({ rowNum: rowNum, colNum: colNum })
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
