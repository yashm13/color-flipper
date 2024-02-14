const _ = ["red", "green", "black", "blue"]

const button = document.querySelector('.btn');
const color = document.querySelector('#color');


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // function to generate random RGB color value
  
function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }
  
button.addEventListener('click', () => {

    const randcol = randomRGB(); 
    color.textContent = randcol;
    document.body.style.backgroundColor = randcol;

});