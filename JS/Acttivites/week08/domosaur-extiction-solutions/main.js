const messWithMeWord = document.querySelector('span.mess-with-me');
const messWithMeParagraph = document.querySelector('p.mess-with-me');
const triceratops = document.querySelector('#triceratops');
const tRex = document.querySelector('#hide-me');
const feathered = document.querySelector('#feathers');
const plushTRex = document.querySelector('#rattle');
const toggle = document.querySelector('#toggle');
const row = document.querySelector('#row');
const ankylosaur = document.querySelector('#biggify');

messWithMeWord.style.fontSize = '3em';
messWithMeParagraph.style.backgroundColor = 'lightgreen';
tRex.style.display = 'none';
triceratops.style.width = '324px';

messWithMeWord.addEventListener('click', makeOrange);
triceratops.addEventListener('click', giveRedBorder);
feathered.addEventListener('click', makeTransparent);
toggle.addEventListener('click', toggleRowBackground);
ankylosaur.addEventListener('mouseenter', toggleSize);
ankylosaur.addEventListener('mouseleave', toggleSize);

const makeOrange = function() {
  messWithMeWord.style.color = 'orange';
}

const giveRedBorder = function() {
  triceratops.style.border = '3px solid red';
}

const makeTransparent = function() {
  feathered.style.opacity = 0.5;
}

let rowBackgroundIsWhite = true;

const toggleRowBackground = function() {
  if (row.style.backgroundColor === 'black') {
    row.style.backgroundColor = 'white';
  } else {
    row.style.backgroundColor = 'black';
  }

  // Alternately, using global variable:
  // if (rowBackgroundIsWhite) {
  //   row.style.backgroundColor = 'black';
  //   rowBackgroundIsWhite = false;
  // } else {
  //   row.style.backgroundColor = 'white';
  //   rowBackgroundIsWhite = true;
  // }

  // Or, instead of all that setting of false/true
  // in the actual ifs, you can do it on one line:
  // rowBackgroundIsWhite = !rowBackgroundIsWhite
}

const toggleSize = function() {
  if (ankylosaur.style.width === '200px') {
    ankylosaur.style.width = '162px';
  } else {
    ankylosaur.style.width = '200px';
  }
}
