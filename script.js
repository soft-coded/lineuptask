const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasOffset = canvas.getBoundingClientRect();
const offsetX = canvasOffset.left;
const offsetY = canvasOffset.top;
let startX;
let startY;
let isDown = false;

function drawOval(x, y) {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(startX, startY + (y - startY) / 2);
	ctx.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
	ctx.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
	ctx.closePath();
	ctx.stroke();
}

function handleMouseDown(e) {
	e.preventDefault();
	e.stopPropagation();
	startX = parseInt(e.clientX - offsetX);
	startY = parseInt(e.clientY - offsetY);
	console.log(e.clientX, e.clientY);
	isDown = true;
}

function handleMouseUp(e) {
	if (!isDown) return;
	e.preventDefault();
	e.stopPropagation();

	isDown = false;
}

function handleMouseOut(e) {
	if (!isDown) return;
	e.preventDefault();
	e.stopPropagation();

	isDown = false;
}

function handleMouseMove(e) {
	if (!isDown) {
		return;
	}
	e.preventDefault();
	e.stopPropagation();
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);
	drawOval(mouseX, mouseY);
}

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("mouseout", handleMouseOut);
