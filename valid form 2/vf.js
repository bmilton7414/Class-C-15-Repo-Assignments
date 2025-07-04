// NAME VALIDATION
const nameInput = document.getElementById("nameInput");
const nameMsg = document.getElementById("nameMsg");
nameInput.addEventListener("input", () => {
  const regex = /^[A-Za-z\s]{2,}$/;
  const valid = regex.test(nameInput.value);
  nameMsg.textContent = valid ? "OK!" : "Use letters & spaces (min 2)";
  nameMsg.style.color = valid ? "green" : "red";
});

// EMAIL VALIDATION
const emailInput = document.getElementById("emailInput");
const emailMsg = document.getElementById("emailMsg");
emailInput.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(emailInput.value);
  emailMsg.textContent = valid ? "Valid email!" : "Invalid email format";
  emailMsg.style.color = valid ? "green" : "red";
});

// PHONE VALIDATION
const phoneInput = document.getElementById("phoneInput");
const phoneMsg = document.getElementById("phoneMsg");
phoneInput.addEventListener("input", () => {
  const regex = /^\d{10}$/;
  const valid = regex.test(phoneInput.value);
  phoneMsg.textContent = valid ? "Looks good!" : "Must be 10 digits";
  phoneMsg.style.color = valid ? "green" : "red";
});

// ZIP VALIDATION
const zipInput = document.getElementById("zipInput");
const zipMsg = document.getElementById("zipMsg");
zipInput.addEventListener("input", () => {
  const regex = /^\d{5}$/;
  const valid = regex.test(zipInput.value);
  zipMsg.textContent = valid ? "Perfect ZIP!" : "Enter 5 digits";
  zipMsg.style.color = valid ? "green" : "red";
});
