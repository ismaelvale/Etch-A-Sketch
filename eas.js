const body = document.body;
const container = document.querySelector('div');
const div = document.createElement('div');

for (let i = 0; i < 256; i++){
    container.innerHTML += '<div class="square"></div>';
}