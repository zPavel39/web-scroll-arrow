import React, { useEffect, useState } from "react";
import "./App.scss";
import Scroll from "./scroll/Scroll";

function App() {
  const [range, setRange] = useState();
  return (
    <div className="App">
      <Scroll setRange={setRange} range={range} />
    </div>
  );
}

export default App;
