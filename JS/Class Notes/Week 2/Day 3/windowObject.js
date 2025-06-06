////////////////////////////////////////////////Window Input Methods///////////////////////////////

// The window.prompt() method displays a dialog with an optional message prompting the user to input some text.
// It returns the text the user entered, or null if the user cancels. It takes two arguments:
//   1) The message to display.
//   2) (Optional) A default value for the input field.

// Example usage:
// prompt("What is your name?");  // Displays a prompt with no default.

//Prompt your user with a question and console.log() the response:
let userName = prompt("What is your name?", "Guest");  
// • If the user types “Alice” and clicks OK, userName === "Alice".
// • If the user clicks Cancel, userName === null.

console.log("User entered:", userName);



///////////////////////////////////////////////Window confirm() Method///////////////////////////////

// The window.confirm() method displays a modal dialog with a message and two buttons—OK and Cancel.
// It returns true if the user clicks OK, and false if the user clicks Cancel.

// Example usage:
let isOver18 = confirm("Are you 18 or older?");  
// • If the user clicks OK, isOver18 === true.
// • If the user clicks Cancel, isOver18 === false.

console.log("User is 18 or older:", isOver18);

// prompt(message, defaultValue)

    // Purpose: Collects a string input from the user.

    // Returns: The entered string, or null if canceled.

    // Use Cases: Asking for simple user data (name, age, password, etc.).

confirm(message)

    // Purpose: Asks the user to confirm (“OK”/“Cancel”) a yes/no question.

    // Returns: true if OK, false if Cancel.

    // Use Cases: Verifying a destructive action (delete, sign out), consent, etc.