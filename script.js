let gridContainer = document.querySelector(".grid-container");
let button = document.querySelector(".button");

button.addEventListener("click", resetGrid);

// Creates a grid with a specific number of rows and columns
function setGrid(rows, cols) {
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // Creates separate divs for each square in the container
  for (i = 0; i < (rows * cols); i++) {
    let gridElement = document.createElement("div");
    gridContainer.appendChild(gridElement);
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", setColor);
  };
};

// Resets each grid square to its default state
function resetGrid() {
  // Prompts the user for a new grid size
  let newSize = prompt("Enter new grid size");

  // Removes each individual square from the grid
  let gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });

  // Creates the new grid size
  setGrid(newSize, newSize);
}

// Changes the background color of each square on hover
function setColor(event) {
  event.target.style.backgroundColor = "#000000";
}

setGrid(16, 16);
