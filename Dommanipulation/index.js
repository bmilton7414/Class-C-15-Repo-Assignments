const heading = document.getElementById("title");

// to grab elements
let btn = document.getElementById("my-btn");
let title = document.getElementById("title");


heading.style.color = "white";
heading.style.marginTop = "2rem";



// attach an event listener to the button
btn.addEventListener("click", function() {
    console.log("Button clicked!");
    document.body.style.backgroundColor = "grey";
})

setTimeout(function() {
    title.textContent = "Title updated after the set timeout/ delay";
    title.style.color = "green";
}, 5000);