// const cube = document.getElementById('cube');
// const rotateBtn = document.getElementById('rotate-btn');

// let angle = 0;

// rotateBtn.addEventListener('click', () => {
//   angle += 90;
//   cube.style.transform = `rotateY(${angle}deg)`;
// });


const cube = document.getElementById('cube');
const rotateBtn = document.getElementById('rotate-btn');

let xAngle = 0;
let yAngle = 0;

// When button is clicked, rotate cube to next side (in Y direction)
rotateBtn.addEventListener('click', () => {
  yAngle += 90; // You can change this to 45 or other value if needed
  cube.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
});
