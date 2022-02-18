const body = document.body;
const container = document.querySelector('div');
const div = document.createElement('div');

for (let i = 0; i < 256; i++){
    container.innerHTML += '<div id="square"></div>';
}

document.addEventListener("mouseover", function(e) {
    if (e.target && e.target.id== 'square') {
        e.target.style.backgroundColor= 'black';
    }
});