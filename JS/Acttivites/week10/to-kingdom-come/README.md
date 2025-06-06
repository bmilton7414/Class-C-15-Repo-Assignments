# To KingDOM come

## Objectives

### Part One - Querying DOM Elements

**These functions do not require a `return` statement.**

1. Develop a function that adds a strikethrough style to the text of the first `<li>` element in the "Arguments" unordered list (`<ul`). This function, because it has a consistent behavior, does not require any parameters.

2. Apply the function to the first list item (`<li>`), rendering it with a strikethrough style.

3. Create a function that accepts two strings as parameters: one representing a DOM element's `id` and the other a URL. This function should set the source of the image with the specified `id` to the provided URL.

4. Utilize this function to set the source of three images in the Image Area section with images of your choice. You'll need to make three separate calls to this function.

5. Another function that doesn't require any parameters: Develop a function that consistently removes the first `<li>` from the Arguments `<ul>`.

6. Utilize this function to remove the first two items from the list by making two consecutive calls to it.

7. Create a function that takes two strings as parameters: one representing a font size and the other representing an id. This function should adjust the text size of the element with the specified id to the provided font size.

8. Experiment with this function to modify the text size of any element on the page.

### Part Two - DOM Elements as Function Parameters

**These functions will accept DOM elements as parameters and do not need to `return` anything.**

1. Develop a function that accepts a DOM element as a parameter and appends it to the Arguments `<ul>`.

2. Put this function into action by creating an image element in JavaScript and passing it as a parameter to your function.

3. Create a function that takes an image element as a parameter and changes its height to 30 pixels.

4. Implement this function by querying an image element and passing it as a parameter to the function.

5. Develop a function that accepts an element as a parameter and assigns it the class `invisible`.

6. Now, query an element on the page and pass it as a parameter to this function. You will observe the element disappearing. (You can check the CSS file to understand how the `invisible` class functions.)

### Part Three - Creating DOM Elements

**These functions will `return` new DOM elements.**

1. Write a function that accepts text as a parameter and returns a new `<li>` with the provided text as its `innerText`.

2. Test the function by calling it. Store the returned DOM element in a variable and then append it to the page using your function from Part Two.

3. Create a function that accepts two strings as parameters: one representing a header size and the other some text. This function should return a new header element with the specified size (e.g., a '3' for the first parameter should result in an `<h3>`) containing the provided text.

4. Test the function by calling it with a header size and some text, storing the return value in a variable, and then appending it to the page using your function from Part Two.
