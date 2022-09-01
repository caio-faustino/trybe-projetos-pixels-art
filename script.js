const colors = document.getElementsByClassName('color');
let colorStorage = [];
colorStorage[0] = '#000000';

function colorRandomizer() {
  let randomColor;

  for (let i = 1; i < colors.length; i += 1) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    colors[i].style.backgroundColor = `#${randomColor}`;
    colorStorage[i] = `#${randomColor}`;
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorStorage));
}

function colorRestore() {
  colorStorage = JSON.parse(localStorage.getItem('colorPalette'));

  for (let j = 1; j < colors.length; j += 1) {
    colors[j].style.backgroundColor = colorStorage[j];
  }
}

function start() {
  if (localStorage.getItem('colorPalette') === null) {
    colorRandomizer();
  } else {
    colorRestore();
  }
}

const botaoCor = document.getElementById('button-random-color');
botaoCor.addEventListener('click', colorRandomizer);

window.onload = start;
