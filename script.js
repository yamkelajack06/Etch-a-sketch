const grid = document.querySelector(".grid");
let isDrawing = false;

function createGrid(gridSize) {
  if (gridSize < 1) {
    alert("Value must be greater than or equal to 1");
    return;
  }

  if (gridSize > 50) {
    alert("Value must be less than or equal to 50");
    return;
  }

  grid.innerHTML = "";
  isDrawing = false;
  grid.style.display = "flex";
  grid.style.flexDirection = "column";

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.outline = "1px solid black";
    row.style.flex = "1";

    for (let j = 0; j < gridSize; j++) {
      const column = document.createElement("div");
      column.style.flex = "1";
      column.style.outline = "1px solid black";
      row.appendChild(column);

      column.addEventListener("mousedown", () => {
        isDrawing = true;
        column.style.backgroundColor = "blue";
      });

      column.addEventListener("mousemove", () => {
        if (isDrawing) {
          column.style.backgroundColor = "blue";
        }
      });
    }

    grid.appendChild(row);
  }

  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => {
    clearGrid();
  });

  const clearGrid = () => {
    const columns = grid.querySelectorAll("div div");
    columns.forEach(column => {
      column.style.backgroundColor = "white";
    });
  };

  isFunctionCalled = true;
}

grid.addEventListener("mouseup", () => {
  isDrawing = false;
});

document.addEventListener("DOMContentLoaded", () => {
  createGrid(2);
});

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", () => {
  const gridSize = document.querySelector("#grid-size").value;
  createGrid(gridSize);
});
