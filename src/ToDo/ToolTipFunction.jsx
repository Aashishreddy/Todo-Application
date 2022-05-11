
import React from "react";

import ReactTooltip from "react-tooltip";

export default function App() {
  return (
    <div className="App">
      <button data-tip data-for="registerTip">
        Register
      </button>

      <ReactTooltip id="registerTip" place="top" effect="solid">
        Tooltip for the register button
      </ReactTooltip>
    </div>
  );
}