const body = document.body;
const container = document.querySelector('div');

window.onload = createGrid(16);

function createGrid (n) {
    for (let i = 0; i < n; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row)
    }
}


document.addEventListener("mouseover", function(e) {
    if (e.target && e.target.classList== 'cell') {
        e.target.style.backgroundColor= 'black';
    }
});

const refresh = document.querySelector('#newgrid');

refresh.addEventListener('click', function() {
    const grid = prompt('Choose grid size: (Max:100)');
    clearGrid();
    createGrid(grid);
}); 

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
  }
