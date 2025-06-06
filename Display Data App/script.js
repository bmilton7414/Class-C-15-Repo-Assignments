// Data: an array of shoe objects
const shoes = [
  { 
    title: "BelAir",
    color: "White, purple, and highlighter green",
    retro: 5
  },
  {
    title: "Black Cat",
    color: "Black",
    retro: 3
  },
  {
    title: "Hare Jordan",
    color: "White, red, and black",
    retro: 6
  },
  {
    title: "Playoff",
    color: "Red and black",
    retro: 11
  }
];

// Get the container element from index.html
const container = document.getElementById("data-container");

// Check if the shoes array is empty
if (shoes.length === 0) {
  const emptyMsg = document.createElement("p");
  emptyMsg.textContent = "No shoes to display right now.";
  container.appendChild(emptyMsg);
} else {
  // Loop through each shoe object in the array
  for (const shoe of shoes) {
    // 1. Create a wrapper div for this shoe
    const card = document.createElement("div");
    card.classList.add("item-card");

    // 2. Create an element for the shoe title
    const titleEl = document.createElement("h2");
    titleEl.classList.add("item-title");
    titleEl.textContent = shoe.title;

    // 3. Create a paragraph for color and retro number
    const detailsEl = document.createElement("p");
    detailsEl.classList.add("item-details");
    detailsEl.textContent = `Color: ${shoe.color} (Retro ${shoe.retro})`;

    // 4. Put title and details inside the card
    card.appendChild(titleEl);
    card.appendChild(detailsEl);

    // 5. Add this card to the main container
    container.appendChild(card);
  }
}


