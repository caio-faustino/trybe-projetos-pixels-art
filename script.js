const colorButton = document.getElementById('button-random-color');
const Limpar = document.getElementById('clear-board');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

let selectedColor = 'black';
let randomized = false;
let paletteStore = [];
let pixelStorage = new Array(pixels.length).fill('white');

function paletteRandomizer() {
  let randomColor;

  for (let i = 1; i < colors.length; i += 1) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors[i].style.backgroundColor = `#${randomColor}`;
    paletteStore[i] = `#${randomColor}`;
  }
  localStorage.setItem('colorPalette', JSON.stringify(paletteStore));
  randomized = true;
}

function paletteRestore() {
  paletteStore = JSON.parse(localStorage.getItem('colorPalette'));

  for (let j = 1; j < colors.length; j += 1) {
    colors[j].style.backgroundColor = paletteStore[j];
  }
}

function pixelRestore() {
  pixelStorage = JSON.parse(localStorage.getItem('pixelBoard'));

  for (let j = 0; j < pixels.length; j += 1) {
    pixels[j].style.backgroundColor = pixelStorage[j];
  }
}

function colorCatch(index) {
  const selected = document.getElementsByClassName('selected');
  selected[0].classList.remove('selected');
  colors[index].classList.add('selected');

  if (index === 0 || !randomized) {
    selectedColor = window.getComputedStyle(document.getElementsByClassName('selected')[0], null).getPropertyValue('background-color');
  } else {
    selectedColor = colors[index].style.backgroundColor;
  }
}

function colorChange(index) {
  pixels[index].style.backgroundColor = selectedColor;
  pixelStorage[index] = selectedColor;
  localStorage.setItem('pixelBoard', JSON.stringify(pixelStorage));
}

function clearBoard() {
  for (let k = 0; k < pixels.length; k += 1) {
    pixels[k].style.backgroundColor = 'white';
    pixelStorage[k] = 'white';
  }

  localStorage.setItem('pixelBoard', JSON.stringify(pixelStorage));
}

for (let j = 0; j < colors.length; j += 1) {
  colors[j].addEventListener('click', () => { colorCatch(j); });
}

for (let k = 0; k < pixels.length; k += 1) {
  pixels[k].addEventListener('click', () => { colorChange(k); });
}

function start() {
  if (localStorage.getItem('colorPalette') !== null) {
    paletteRestore();
    randomized = true;
  }

  if (localStorage.getItem('pixelBoard') !== null) {
    pixelRestore();
  }
}

window.onload = start;
colorButton.addEventListener('click', paletteRandomizer);
Limpar.addEventListener('click', clearBoard);
