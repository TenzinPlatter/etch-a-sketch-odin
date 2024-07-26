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
		gridSquare.classList.add("hovered");
	})
	gridSquare.style.width = `${size}px`;
	gridSquare.style.height = `${size}px`;

	return gridSquare;
}

function replaceGrid(newGrid) {
	const oldGrid = document.querySelector(".grid-container")
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

function init() {
	const grid = getGrid(16);
	const newGridButton = getGridButton();
	
	body.appendChild(grid);
	body.appendChild(newGridButton);
}


const body = document.querySelector("body");
init();
