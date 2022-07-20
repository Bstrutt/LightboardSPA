import React from "react";
import Cell from "./Cell.js";

const BoardLine = props => {
  const { y, line } = props;
  return (
    <tr>
      
      {line.map((cellType, x) => {
        return (
          <Cell
            key={"" + y + x}
            x={x}
            y={y}
            clickHandler={props.clickHandler}
            type={cellType}
          />
        );
      })}
    </tr>
  );
};

export default BoardLine;