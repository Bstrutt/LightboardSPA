import { useState } from "react";
import { Board } from "./Board";

function App() {
  const initialWidth = 10;
  const initialHeight = 10;

  let [width, setWidth] = useState(initialWidth);
  let [height, setHeight] = useState(initialHeight);

  const widthOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  const heightOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <div>
        <label>
          Width{" "}
          <input
            id="width"
            name="width"
            defaultValue={initialWidth}
            onChange={widthOnChange}
          />
        </label>
      </div>

      <div>
        <label>
          Height{" "}
          <input
            name="height"
            id="height"
            defaultValue={initialHeight}
            onChange={heightOnChange}
          />
        </label>
      </div>

      <Board dimension={height} lifespan={width}></Board>
    </div>
  );
}

export default App;
