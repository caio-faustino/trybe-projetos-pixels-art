function button() {
  const clickPaleta = document.querySelectorAll('.color');
  const newButton = document.getElementById('button-random-color');
  newButton.addEventListener('click', () => {
    for (let index = 0; index < clickPaleta.length; index += 1) {
      const cor1 = Math.floor(Math.random() * 255);
      const cor2 = Math.floor(Math.random() * 255);
      const cor3 = Math.floor(Math.random() * 255);

      if (index === 0) {
        clickPaleta[index].style.backgroundColor = 'black';
      } else {
        clickPaleta[index].style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`;
      }
    }
  });
}
button();