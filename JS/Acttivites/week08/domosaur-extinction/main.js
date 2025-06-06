const plushTRex = document.querySelector('#rattle');

const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'lightgreen';

const tRex = document.querySelector('#hide-me');
tRex.style.display = 'none';

//Challenge 1 solution
const messWithMeWord = document.querySelector('span.mess-with-me');
messWithMeWord.addEventListener('click', makeOrange);
const makeOrange = function() {
    messWithMeWord.style.color = 'orange';
    messWithMeWord.style.fontSize = '3em';
  }
//Challenge 2 solution
const triceratops = document.querySelector('#triceratops');
triceratops.addEventListener('click', giveRedBorder);
const giveRedBorder = function() {
triceratops.style.border = '3px solid red';
triceratops.style.width = '324px';
}
//Challenge 3 solution
const feathered = document.querySelector('#feathers');
feathered.addEventListener('click', makeTransparent);
const makeTransparent = function() {
    feathered.style.opacity = 0.5;
  }
//Challenge 4 solution
const toggle = document.querySelector('#toggle');
const row = document.querySelector('#row');
toggle.addEventListener('click', toggleRowBackground)
const toggleRowBackground = function() {
    if (row.style.backgroundColor === 'black') {
      row.style.backgroundColor = 'white';
    } else {
      row.style.backgroundColor = 'black';
    }
}
//Challenge 5 solutions
const ankylosaur = document.querySelector('#biggify');
ankylosaur.addEventListener('mouseover', toggleSize);
ankylosaur.addEventListener('mouseout', toggleSize);
const toggleSize = function() {
    if (ankylosaur.style.width === '200px') {
      ankylosaur.style.width = '162px';
    } else {
      ankylosaur.style.width = '200px';
    }
  }
