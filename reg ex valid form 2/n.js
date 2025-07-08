// NAME VALIDATION — comment for clarity
const nameInput = document.getElementById("nameInput"); // links JS to the name input
const nameMsg = document.getElementById("nameMsg"); // links JS to the message span
nameInput.addEventListener("input", () => { // runs code every time you type
  const regex = /^[A-Za-z\s]{2,}$/;
  // ^: start; [A-Za-z\s]: letters or spaces; {2,}: at least 2; $: end
  const valid = regex.test(nameInput.value); // checks if input matches
  nameMsg.textContent = valid ? "OK!" : "Use letters & spaces (min 2)"; // sets the message
  nameMsg.style.color = valid ? "green" : "red"; // sets green or red color
});

// EMAIL VALIDATION
const emailInput = document.getElementById("emailInput");
const emailMsg = document.getElementById("emailMsg");
emailInput.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Basic email format
  const valid = regex.test(emailInput.value);
  emailMsg.textContent = valid ? "Valid email!" : "Invalid email format";
  emailMsg.style.color = valid ? "green" : "red";
});

// PHONE VALIDATION
const phoneInput = document.getElementById("phoneInput");
const phoneMsg = document.getElementById("phoneMsg");
phoneInput.addEventListener("input", () => {
  const regex = /^\d{10}$/; // exactly ten digits
  const valid = regex.test(phoneInput.value);
  phoneMsg.textContent = valid ? "Looks good!" : "Must be 10 digits";
  phoneMsg.style.color = valid ? "green" : "red";
});

// ZIP VALIDATION
const zipInput = document.getElementById("zipInput");
const zipMsg = document.getElementById("zipMsg");
zipInput.addEventListener("input", () => {
  const regex = /^\d{5}$/; // exactly five digits
  const valid = regex.test(zipInput.value);
  zipMsg.textContent = valid ? "Perfect ZIP!" : "Enter 5 digits";
  zipMsg.style.color = valid ? "green" : "red";
});
