// Array of movie objects, each containing title, year, genre, rating, and nested director info
const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation, Action",
    rating: "8.4/10",
    director: {
      name: "Bob Persichetti",
      age: 45
    }
  },
  {
    title: "Black Panther",
    year: 2018,
    genre: "Action, Adventure",
    rating: "7.3/10",
    director: {
      name: "Ryan Coogler",
      age: 37
    }
  },
    {    title: "Diary of a Mad Black Woman",
    year: 2005,
    genre: "Comedy, Drama",
    rating: "5.6/10",
    director: {
      name: "Darrin Henson",
    }},
];

let currentIndex = 0; // Keeps track of which movie is currently displayed

// Function to update the DOM with the movie's details
function displayMovie(movie) {
  const { title, year, genre, rating, director: { name: directorName, age } } = movie;

  const movieHTML = `
    <h2>${title}</h2>
    <p><strong>Year:</strong> ${year}</p>
    <p><strong>Genre:</strong> ${genre}</p>
    <p><strong>IMDB Rating:</strong> ${rating}</p>
    <p><strong>Director:</strong> ${directorName} (${age} years old)</p>
  `;

  document.getElementById("movie-container").innerHTML = movieHTML;
}

// Display the first movie when the page loads
displayMovie(movies[currentIndex]);

// Event listener for the toggle button to switch between movies
document.getElementById("toggle-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % movies.length; // Loop back to first movie if at the end
  displayMovie(movies[currentIndex]);
});

// Event listener for form submission to add a new movie
document.getElementById("movie-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Create a new movie object from user input
  const newMovie = {
    title: document.getElementById("new-title").value,
    year: parseInt(document.getElementById("new-year").value),
    genre: document.getElementById("new-genre").value,
    rating: "N/A", // Default rating
    director: {
      name: document.getElementById("new-director").value,
      age: "N/A" // Age not collected, marked as "N/A"
    }
  };

  // Add the new movie to the list and display it
  movies.push(newMovie);
  currentIndex = movies.length - 1;
  displayMovie(newMovie);

  // Clear the form inputs
  e.target.reset();
});

