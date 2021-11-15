import React, { useState } from "react";

import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Eraser from "../tools/Eraser";
import Circle from "../tools/Circle";
import Line from "../tools/Line";

import "../styles/toolbar.scss";

const ToolBar = () => {
	const [activeTool, setActiveTool] = useState("brush");
	
	const handleChangeColor = (e) => {
		toolState.setFillColor(e.target.value);
	};
	
	const handleSetBrush = (e) => {
		toolState.setTool(new Brush(canvasState.canvas));
		setActiveTool(e.target.dataset.type);
	};
	
	const handleSetRect = (e) => {
		toolState.setTool(new Rect(canvasState.canvas));
		setActiveTool(e.target.dataset.type);
	};
	
	const handleSetCircle = (e) => {
		toolState.setTool(new Circle(canvasState.canvas));
		setActiveTool(e.target.dataset.type);
	};
	
	const handleSetEraser = (e) => {
		toolState.setTool(new Eraser(canvasState.canvas));
		setActiveTool(e.target.dataset.type);
	};
	
	const handleSetLine = (e) => {
		toolState.setTool(new Line(canvasState.canvas));
		setActiveTool(e.target.dataset.type);
	};
	
	const checkActiveClass = (type) => {
		return activeTool === type ? "active" : "";
	};
	const buttonsArray = [
		{type: "brush", onClick: handleSetBrush},
		{type: "rect", onClick: handleSetRect},
		{type: "circle", onClick: handleSetCircle},
		{type: "eraser", onClick: handleSetEraser},
		{type: "line", onClick: handleSetLine},
	];
	
	return (
		<div className="toolbar">
			{buttonsArray.map(({type, onClick}) => {
				return (
					<button
						key={type}
						className={`toolbar__btn ${type} ${checkActiveClass(type)}`}
						onClick={onClick}
						data-type={type}
					/>
				);
			})}
			<input
				style={{marginLeft: 10}}
				type="color"
				onChange={(e) => {
					handleChangeColor(e);
				}}
				className={`toolbar__input`}
				data-type="fillColor"
			/>
			<button
				className="toolbar__btn undo"
				onClick={() => canvasState.undo()}
				data-type="undo"
			/>
			<button
				className="toolbar__btn redo"
				data-type="redo"
				onClick={() => canvasState.redo()}
			/>
			<button className="toolbar__btn save" data-type="save"/>
		</div>
	);
};

export default ToolBar;
