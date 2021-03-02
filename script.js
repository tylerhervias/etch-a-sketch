let gridContainer = document.querySelector('.grid-container');

// Creates a grid with a specific number of rows and columns
function setGrid(rows, cols) {
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // Creates separate divs for each square in the container
  for (i = 0; i < (rows * cols); i++) {
    let gridElement = document.createElement("div");
    gridContainer.appendChild(gridElement);
    gridElement.classList = 'grid-element';
  };
};

setGrid(16, 16);