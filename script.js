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
  let newSize = prompt("Enter new grid size (Min: 1/Max: 100)");

  if(newSize != null && newSize >= 1 && newSize <= 100) {
    // Removes each individual square from the grid
    let gridArray = Array.from(gridContainer.childNodes);

    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });

    // Creates the new grid size
    setGrid(newSize, newSize);
  } else {
    // Removes each individual square from the grid
    let gridArray = Array.from(gridContainer.childNodes);

    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });

    // Set grid to the default size
    setGrid(16, 16);
  }
}

// Changes the background color of each square on hover
function setColor(event) {
  var randomRValue = Math.floor(Math.random() * 256);
  var randomGValue = Math.floor(Math.random() * 256);
  var randomBValue = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = "rgb(" + randomRValue + "," + randomGValue + "," + randomBValue + ")";
}

setGrid(16, 16);
