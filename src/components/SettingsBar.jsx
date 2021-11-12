import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import toolState from "../store/toolState";

import "../styles/toolbar.scss";

const SettingsBar = observer(() => {
  const [strokeColor, setStrokeColor] = useState("#000000");

  useEffect(() => {
    toolState.tool && toolState.setStrokeColor(strokeColor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strokeColor, toolState.tool]);

  return (
    <div className="settings-bar">
      <label htmlFor="line-width">Толщина линии</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Цвет обводки</label>
      <input
        className="toolbar__input"
        onChange={(e) => setStrokeColor(e.target.value)}
        id="stroke-color"
        type="color"
      />
    </div>
  );
});

export default SettingsBar;
