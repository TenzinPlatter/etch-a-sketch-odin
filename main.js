function getGrid(gridSize) {
	currentGridSize = gridSize;
	const gridContainer = document.createElement('div');
	gridContainer.classList.add("grid-container")
	const squareSize = 960 / gridSize;

	for (let i = 0; i < gridSize; i++) {

		const column = document.createElement("div");
		for (let j = 0; j < gridSize; j++) {
			column.appendChild(getGridSquare(squareSize));
		}
		gridContainer.appendChild(column);

	}

	return gridContainer;
}

function getGridSquare(size) {
	const gridSquare = document.createElement("div");
	gridSquare.classList.add("grid-square");
	gridSquare.addEventListener("mouseover", () => {
		if (gridSquare.style.backgroundColor == "") {
			hoveredSquare(gridSquare);
			return
		} 

		const currOpacity = parseFloat(gridSquare.style.opacity);
		if (currOpacity == 1) {
			return;	
		}
		const newOpacity = currOpacity + 0.2;
		gridSquare.style.opacity = newOpacity.toString();
	})

	gridSquare.style.width = `${size}px`;
	gridSquare.style.height = `${size}px`;

	return gridSquare;
}

function replaceGrid(newGrid) {
	const oldGrid = document.querySelector(".grid-container")
	const body = document.querySelector("body");
	body.replaceChild(newGrid, oldGrid);
}

function getGridButton() {
	const newGridButton = document.createElement("button");
	newGridButton.addEventListener("click", () => {
		let newSize = parseInt(
			prompt("What size would you like your new grid to be? (1 - 100)")
		);

		while (newSize > 100 || gridSize < 0) {
			newSize = parseInt(
				prompt("Sorry, that is an invalid size. Please try again.")
			);
		}

		let newGrid = getGrid(newSize);
		replaceGrid(newGrid);
	})
	newGridButton.classList.add("new-grid");
	newGridButton.textContent = "New Grid";

	return newGridButton;
}

function hoveredSquare(square) {
	const r = Math.random() * 255;
	const g = Math.random() * 255;
	const b = Math.random() * 255;
	square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	square.style.opacity = "0.1";
}
function getButtons() {
	const newGridButton = getGridButton();
	const clearGridButton = getClearButton();

	const container = document.createElement('div');
	container.classList.add("buttons-container");

	container.appendChild(newGridButton);
	container.appendChild(clearGridButton);

	return container;
}

function getClearButton() {
	const button = document.createElement("button");
	button.classList.add("clear");
	button.textContent = "Clear Grid";

	button.addEventListener("click", () => {
		const clearGrid = getGrid(currentGridSize);
		replaceGrid(clearGrid);
	})

	return button;
}

function init(body) {
	const grid = getGrid(16);
	const buttons = getButtons();
	
	body.appendChild(grid);
	body.appendChild(buttons)
}


const body = document.querySelector("body");
let currentGridSize = 16;
init(body);
