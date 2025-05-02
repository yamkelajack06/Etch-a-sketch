const grid = document.querySelector(".grid");
let isDrawing = false;
let currentColor = "blue";

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
      column.style.outline = "1px solid black";
      column.style.flex = "1";
      row.appendChild(column);

      column.addEventListener("mousedown", () => {
        isDrawing = true;
        column.style.backgroundColor = currentColor;
      });

      column.addEventListener("mousemove", () => {
        if (isDrawing) {
          column.style.backgroundColor = currentColor;
        }
      });
    }

    grid.appendChild(row);
  }

  const clearGrid = () => {
    const columns = grid.querySelectorAll("div div");
    columns.forEach((column) => {
      column.style.backgroundColor = "white";
    });
  };

  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => {
    clearGrid();
  });
}

grid.addEventListener("mouseup", () => {
  isDrawing = false;
});

document.addEventListener("DOMContentLoaded", () => {
  createGrid(2);

  const sizeButton = document.querySelector("#size-button");
  sizeButton.addEventListener("click", () => {
    const gridSize = document.querySelector("#grid-size").value;
    createGrid(gridSize);
  });

  const blackButton = document.querySelector("#black-button");
  blackButton.addEventListener("click", () => {
    currentColor = "black";
  });

  const colorPicker = document.querySelector("#color-button");
  colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
  });

  const eraseButton = document.querySelector("#erase-button");
  eraseButton.addEventListener("click", () => {
    currentColor = "white";
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomButton = document.querySelector('#random-button');
randomButton.addEventListener('click', () => {
  let R = getRandomInt(0,255);
  let G = getRandomInt(0,255);
  let B = getRandomInt(0,255);

  currentColor = `rgb(${R}, ${G}, ${B})`;
})
