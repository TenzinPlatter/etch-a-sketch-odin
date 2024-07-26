function getGrid(gridSize) {
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
			prompt("What size would you like your new grid to be? (Max 100)")
		);

		while (newSize > 100) {
			newSize = parseInt(
				prompt("Sorry, grid size cannot be over 100. Please try again.")
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

function init(body) {
	const grid = getGrid(16);
	const newGridButton = getGridButton();
	
	body.appendChild(grid);
	body.appendChild(newGridButton);
}


const body = document.querySelector("body");
init(body);
