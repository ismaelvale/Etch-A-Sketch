const body = document.body;
const container = document.querySelector('div');
const div = document.createElement('div');

window.onload = createGrid (256);

function createGrid (n) {
    for (let i = 0; i < n; i++){
        container.innerHTML += '<div id="square"></div>';
    }
}

document.addEventListener("mouseover", function(e) {
    if (e.target && e.target.id== 'square') {
        e.target.style.backgroundColor= 'black';
    }
});

const refresh = document.querySelector('button');

refresh.addEventListener('click', function() {
    const grid = prompt('Choose grid size: (Max:100)');
    console.log(grid);
    createGrid(grid);
}); 