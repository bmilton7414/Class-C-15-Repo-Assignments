// ======================
// Part 1: Get random dog
// ======================

// Get dog DOM elements
const dogButton = document.querySelector('#dog button');
const dogImg = document.querySelector('#dog img')

// When dog button is pressed...
dogButton.addEventListener('click', () => {

    // Make an API request to get a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            
            // Set the img src to the random dog image
            dogImg.src = data.message
        });
});

// ========================
// Part 2: Get city weather
// ========================

// Get weather DOM elements
const weatherButton = document.querySelector('#weather button');
const weatherInput = document.querySelector('#weather input');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');

// When the weather button is pressed...
weatherButton.addEventListener('click', () => {

    // Make an API request to get the weather at the city entered into the 
    // input box
    fetch(`https://goweather.herokuapp.com/weather/${weatherInput.value}`)
        .then(res => res.json())
        .then(data => {

            // If values are not present, use default 'Not found.' string
            const descText = data.description || 'Not found.'
            const tempText = data.temperature || 'Not found.'
            const windText = data.wind || 'Not found.'

            // Set the innerText of the DOM elements
            desc.innerText = `Desc: ${descText}`;
            temp.innerText = `Temp: ${tempText}`;
            wind.innerText = `Wind: ${windText}`;
        });
});