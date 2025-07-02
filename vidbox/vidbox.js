const boxesContainer = document.getElementById('boxes');
// This line retrieves the HTML element with the ID `boxes` for manipulation.

const btn = document.getElementById('btn');
// This line retrieves the "Magic" button element.

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});
// Upon a click event on the button, the `big` class is toggled on the `boxesContainer`, initiating the CSS rotation animation.

// Grid Creation
function createBoxes() {
  // sl shout out
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      // This loop generates 16 `div` elements (4 rows x 4 columns) and assigns the `box` class to each.

      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // This adjusts the `background-position` for each box, ensuring it displays a distinct segment of the background image.

      boxesContainer.appendChild(box);
      // This appends the newly created boxes to the main container.
    }
  }
}

createBoxes();
// This function call executes the box creation process upon page load.
