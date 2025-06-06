<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript DOM Manipulation Examples (Independent Handlers)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f0f0f0;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
    }

    .example {
      margin-bottom: 20px;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }

    h2 {
      margin-top: 0;
    }

    p {
      margin-bottom: 10px;
    }

    ul {
      margin-left: 20px;
    }

    .code-input {
      width: calc(100% - 22px);
      height: 200px;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
      font-family: monospace;
      white-space: pre;
    }

    .console-output {
      border: 1px solid #ccc;
      padding: 10px;
      height: 200px;
      overflow-y: scroll;
      background-color: #1e1e1e;
      color: #dcdcdc;
      border-radius: 4px;
      font-family: monospace;
      white-space: pre-wrap;
    }

    .run-button {
      display: block;
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .run-button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>JavaScript DOM Manipulation Examples</h1>

    <!-- Example 1: Selecting & Understanding Node Collections -->
    <div class="example">
      <h2>Example 1: Selecting &amp; Understanding Node Collections</h2>
      <p>Compare <code>getElementById</code>, <code>getElementsByClassName</code> (live HTMLCollection) vs. <code>querySelectorAll</code> (static NodeList), and converting to an Array.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example1-code">
// Step 1: Create a container
const ex1Container = document.getElementById("ex1Container") || document.createElement("div");
ex1Container.id = "ex1Container";
if (!ex1Container.parentNode) {
  document.body.appendChild(ex1Container);
}
ex1Container.innerHTML = ""; // Clear if rerun

// Step 2: Build a UL with three items
const ul = document.createElement("ul");
ul.id = "ex1DemoList";
["Alpha","Beta","Gamma"].forEach(text => {
  const li = document.createElement("li");
  li.className = "ex1DemoItem";
  li.setAttribute("data-value", text.toLowerCase());
  li.textContent = text;
  ul.appendChild(li);
});
ex1Container.appendChild(ul);

// Step 3: getElementById (single element)
const listById = document.getElementById("ex1DemoList");
console.log("getElementById ⇒", listById.tagName);

// Step 4: getElementsByClassName (live HTMLCollection)
const itemsByClass = document.getElementsByClassName("ex1DemoItem");
console.log("getElementsByClassName length (initial):", itemsByClass.length);

// Add a fourth item to show live updating
const newLi = document.createElement("li");
newLi.className = "ex1DemoItem";
newLi.textContent = "Delta";
ul.appendChild(newLi);
console.log("After append, HTMLCollection length:", itemsByClass.length);

// Step 5: getElementsByTagName (live HTMLCollection of all <li> in document)
const itemsByTag = document.getElementsByTagName("li");
console.log("getElementsByTagName total <li> count:", itemsByTag.length);

// Step 6: querySelectorAll (static NodeList)
const itemsQueryAll = document.querySelectorAll(".ex1DemoItem");
console.log("querySelectorAll length (initial):", itemsQueryAll.length);

// Append a fifth item—NodeList does NOT update
const anotherLi = document.createElement("li");
anotherLi.className = "ex1DemoItem";
anotherLi.textContent = "Epsilon";
ul.appendChild(anotherLi);
console.log("After append, NodeList length remains:", itemsQueryAll.length);

// Step 7: Converting live HTMLCollection to Array snapshot
const itemsArray = Array.from(document.getElementsByClassName("ex1DemoItem"));
console.log("Array.from HTMLCollection length:", itemsArray.length);
      </textarea>
      <div class="console-output" id="example1-console"></div>
      <button class="run-button" id="example1-button">Run Example 1</button>

      <script>
        (function() {
          const btn = document.getElementById("example1-button");
          const codeArea = document.getElementById("example1-code");
          const outputDiv = document.getElementById("example1-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            // 1) Backup original console methods
            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            // 2) Override console methods
            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            // 3) Execute the code
            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            // 4) Restore original console methods
            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 2: Manipulating Text, HTML, and Attributes -->
    <div class="example">
      <h2>Example 2: Manipulating Text, HTML, and Attributes</h2>
      <p>Demonstrates differences between <code>textContent</code> vs. <code>innerHTML</code>, plus working with <code>dataset</code>, <code>setAttribute</code>, and <code>classList</code>.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example2-code">
// Step 1: Create a container
const ex2Container = document.getElementById("ex2Container") || document.createElement("div");
ex2Container.id = "ex2Container";
if (!ex2Container.parentNode) {
  document.body.appendChild(ex2Container);
}
ex2Container.innerHTML = ""; // Clear if rerun

// Step 2: Create an <h2> and examine textContent vs innerHTML
const header = document.createElement("h2");
header.id = "ex2Header";
header.textContent = "Original Header Text";
ex2Container.appendChild(header);

console.log("Original textContent:", header.textContent);

// Set textContent to a string containing HTML tags—HTML is escaped
header.textContent = "<em>Changed via textContent</em>";
console.log("After textContent, innerHTML is escaped:", header.innerHTML);

// Now use innerHTML—HTML tags are parsed
header.innerHTML = "<em>Changed via innerHTML</em>";
console.log("After innerHTML, rendered HTML:", header.innerHTML);

// Step 3: Work with dataset
header.dataset.info = "DemoInfo";
console.log("dataset.info:", header.dataset.info);
console.log("getAttribute('data-info'):", header.getAttribute("data-info"));

// Step 4: setAttribute, getAttribute, removeAttribute
header.setAttribute("title", "Tooltip Text");
console.log("title attribute:", header.getAttribute("title"));
header.removeAttribute("title");
console.log("After removal, title is:", header.getAttribute("title")); // null

// Step 5: classList methods
header.classList.add("ex2Highlight");
console.log("Has class ex2Highlight?", header.classList.contains("ex2Highlight"));
header.classList.toggle("ex2Highlight"); // removes it
console.log("After toggle, has class?", header.classList.contains("ex2Highlight"));
      </textarea>
      <div class="console-output" id="example2-console"></div>
      <button class="run-button" id="example2-button">Run Example 2</button>

      <script>
        (function() {
          const btn = document.getElementById("example2-button");
          const codeArea = document.getElementById("example2-code");
          const outputDiv = document.getElementById("example2-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 3: Creating, Cloning, and Inserting Elements -->
    <div class="example">
      <h2>Example 3: Creating, Cloning, and Inserting Elements</h2>
      <p>Uses <code>createElement</code>, <code>cloneNode</code>, and insertion methods like <code>appendChild</code>, <code>prepend</code>, <code>insertAdjacentElement</code>.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example3-code">
// Step 1: Create a container
const ex3Container = document.getElementById("ex3Container") || document.createElement("div");
ex3Container.id = "ex3Container";
if (!ex3Container.parentNode) {
  document.body.appendChild(ex3Container);
}
ex3Container.innerHTML = ""; // Clear if rerun

// Step 2: Create a <section> and <h3>
const section = document.createElement("section");
section.id = "ex3Section";
ex3Container.appendChild(section);

const header = document.createElement("h3");
header.textContent = "Dynamically Created Section";
section.appendChild(header);

// Step 3: Insert a <p> after the header
const para = document.createElement("p");
para.textContent = "Paragraph inserted using insertAdjacentElement.";
header.insertAdjacentElement("afterend", para);

// Step 4: Clone that paragraph and prepend it
const clonedPara = para.cloneNode(true); // deep clone
section.prepend(clonedPara);
console.log("Cloned paragraph text:", clonedPara.textContent);
      </textarea>
      <div class="console-output" id="example3-console"></div>
      <button class="run-button" id="example3-button">Run Example 3</button>

      <script>
        (function() {
          const btn = document.getElementById("example3-button");
          const codeArea = document.getElementById("example3-code");
          const outputDiv = document.getElementById("example3-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 4: Removing, Replacing, and Clearing Elements -->
    <div class="example">
      <h2>Example 4: Removing, Replacing, and Clearing Elements</h2>
      <p>Shows <code>remove()</code>, <code>removeChild()</code>, <code>replaceChild()</code>, and clearing with <code>innerHTML = ""</code>.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example4-code">
// Step 1: Create a container with its own <ul>
const ex4Container = document.getElementById("ex4Container") || document.createElement("div");
ex4Container.id = "ex4Container";
if (!ex4Container.parentNode) {
  document.body.appendChild(ex4Container);
}
ex4Container.innerHTML = ""; // Clear if rerun

const ul = document.createElement("ul");
ul.id = "ex4List";
["One","Two","Three"].forEach(text => {
  const li = document.createElement("li");
  li.className = "ex4Item";
  li.textContent = text;
  ul.appendChild(li);
});
ex4Container.appendChild(ul);

// Step 2: Remove the <li> with text "Two"
const toRemove = Array.from(ul.children).find(li => li.textContent === "Two");
if (toRemove) {
  toRemove.remove();
  console.log("Removed 'Two'");
}

// Step 3: Replace "Three" with "Replaced"
const oldItem = Array.from(ul.children).find(li => li.textContent === "Three");
if (oldItem && oldItem.parentNode) {
  const newItem = document.createElement("li");
  newItem.className = "ex4Item";
  newItem.textContent = "Replaced";
  oldItem.parentNode.replaceChild(newItem, oldItem);
  console.log("Replaced 'Three' with 'Replaced'");
}

// Step 4: Remove the first child via removeChild
if (ul.firstElementChild) {
  const child = ul.firstElementChild;
  ul.removeChild(child);
  console.log("Removed first child:", child.textContent);
}

// Step 5: Clear the entire container
ex4Container.innerHTML = "";
console.log("Cleared ex4Container");
      </textarea>
      <div class="console-output" id="example4-console"></div>
      <button class="run-button" id="example4-button">Run Example 4</button>

      <script>
        (function() {
          const btn = document.getElementById("example4-button");
          const codeArea = document.getElementById("example4-code");
          const outputDiv = document.getElementById("example4-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 5: Event Listeners, Capturing vs Bubbling, Delegation -->
    <div class="example">
      <h2>Example 5: Event Listeners, Capturing vs Bubbling, Delegation</h2>
      <p>Demonstrates <code>addEventListener</code> with <code>capture</code> vs. <code>bubble</code>, <code>stopPropagation()</code>, and event delegation.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example5-code">
// Step 1: Create a container
const ex5Container = document.getElementById("ex5Container") || document.createElement("div");
ex5Container.id = "ex5Container";
if (!ex5Container.parentNode) {
  document.body.appendChild(ex5Container);
}
ex5Container.innerHTML = ""; // Clear if rerun

// Step 2: Parent <div> and child <button>
const eventContainer = document.createElement("div");
eventContainer.id = "ex5EventContainer";
eventContainer.style.border = "1px solid #333";
eventContainer.style.padding = "10px";
eventContainer.textContent = "Event Container (Click the button below)";
ex5Container.appendChild(eventContainer);

const eventBtn = document.createElement("button");
eventBtn.id = "ex5EventBtn";
eventBtn.textContent = "Click Me";
eventContainer.appendChild(eventBtn);

// Step 3: Capturing listener on parent
eventContainer.addEventListener("click", (e) => {
  console.log("Parent listener (capturing) triggered");
}, true);

// Step 4: Bubbling listener on parent
eventContainer.addEventListener("click", () => {
  console.log("Parent listener (bubbling) triggered");
}, false);

// Step 5: Child button listener that stops propagation
eventBtn.addEventListener("click", (e) => {
  console.log("Button clicked—stopping propagation");
  e.stopPropagation();
});

// Step 6: Event delegation: create <ul> with <li> items
const delegatedList = document.createElement("ul");
delegatedList.id = "ex5DelegatedList";
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.className = "ex5DelItem";
  li.textContent = `Item ${i}`;
  delegatedList.appendChild(li);
}
eventContainer.appendChild(delegatedList);

// Attach one listener to the <ul>
delegatedList.addEventListener("click", (e) => {
  if (e.target && e.target.matches("li.ex5DelItem")) {
    console.log("Delegated click on:", e.target.textContent);
  }
});

// Step 7: Add another <li> dynamically
const dynLi = document.createElement("li");
dynLi.className = "ex5DelItem";
dynLi.textContent = "Dynamically Added";
delegatedList.appendChild(dynLi);
console.log("Dynamic <li> added—click it for delegation demo.");
      </textarea>
      <div class="console-output" id="example5-console"></div>
      <button class="run-button" id="example5-button">Run Example 5</button>

      <script>
        (function() {
          const btn = document.getElementById("example5-button");
          const codeArea = document.getElementById("example5-code");
          const outputDiv = document.getElementById("example5-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>

    <!-- Example 6: Traversing, Filtering, Live vs Static Lists -->
    <div class="example">
      <h2>Example 6: Traversing, Filtering, Live vs Static Lists</h2>
      <p>Shows parent/child/sibling traversal, filtering a NodeList, and illustrating live HTMLCollections vs static NodeLists.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example6-code">
// Step 1: Create a container and a <ul>
const ex6Container = document.getElementById("ex6Container") || document.createElement("div");
ex6Container.id = "ex6Container";
if (!ex6Container.parentNode) {
  document.body.appendChild(ex6Container);
}
ex6Container.innerHTML = ""; // Clear if rerun

const demoUl = document.createElement("ul");
demoUl.id = "ex6DemoList";
["One","Two","Three"].forEach(text => {
  const li = document.createElement("li");
  li.className = "ex6DemoItem";
  li.textContent = text;
  demoUl.appendChild(li);
});
ex6Container.appendChild(demoUl);

// Step 2: Access children (live HTMLCollection)
const liveChildren = demoUl.children;
console.log("Live children count:", liveChildren.length);

// Step 3: Convert live HTMLCollection to static Array
const staticArray = Array.from(liveChildren);
console.log("Static Array length:", staticArray.length);

// Step 4: Traverse to parent and siblings
const firstLi = demoUl.querySelector("li");
if (firstLi) {
  console.log("First <li> text:", firstLi.textContent);
  console.log("Parent tag:", firstLi.parentElement.tagName);
  console.log("Next sibling:", firstLi.nextElementSibling?.textContent);
  console.log("Previous sibling:", firstLi.previousElementSibling);
}

// Step 5: Filtering with querySelectorAll (static NodeList)
const filtered = demoUl.querySelectorAll("li.ex6DemoItem");
console.log("Filtered NodeList length:", filtered.length);

// Step 6: Append a fourth <li> and show live vs static
const extraLi = document.createElement("li");
extraLi.className = "ex6DemoItem";
extraLi.textContent = "Four";
demoUl.appendChild(extraLi);
console.log("After append, liveChildren length:", liveChildren.length);
console.log("staticArray length (unchanged):", staticArray.length);
      </textarea>
      <div class="console-output" id="example6-console"></div>
      <button class="run-button" id="example6-button">Run Example 6</button>

      <script>
        (function() {
          const btn = document.getElementById("example6-button");
          const codeArea = document.getElementById("example6-code");
          const outputDiv = document.getElementById("example6-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 7: innerHTML vs textContent & Security -->
    <div class="example">
      <h2>Example 7: innerHTML vs textContent &amp; Security/Sanitization</h2>
      <p>Shows safe insertion (textContent) vs unsafe (innerHTML), plus a simple sanitize function.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example7-code">
// Step 1: Create a container
const ex7Container = document.getElementById("ex7Container") || document.createElement("div");
ex7Container.id = "ex7Container";
if (!ex7Container.parentNode) {
  document.body.appendChild(ex7Container);
}
ex7Container.innerHTML = ""; // Clear if rerun

// Step 2: Make a div for output
const safeDiv = document.createElement("div");
safeDiv.id = "ex7SafeDiv";
ex7Container.appendChild(safeDiv);

// Step 3: Simulate malicious user input
const userInput = '<img src="x" onerror="console.log(\'XSS!\')">';

// Using textContent (safe—HTML is escaped)
safeDiv.textContent = userInput;
console.log("textContent output (escaped):", safeDiv.innerHTML);

// Using innerHTML directly (unsafe—would execute onerror)
try {
  safeDiv.innerHTML = userInput;
  console.log("innerHTML output (unsafe—XSS runs if allowed)");
} catch (e) {
  console.error("Error setting innerHTML:", e.message);
}

// Step 4: Basic sanitize function removes <script> tags
function sanitizeHTML(str) {
  return str.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
}

const malicious = '<div>Safe<span onclick="alert(\'evil\')">Click</span><script>alert("bad")</script></div>';
const clean = sanitizeHTML(malicious);
safeDiv.innerHTML = clean;
console.log("After sanitize, innerHTML:", safeDiv.innerHTML);
      </textarea>
      <div class="console-output" id="example7-console"></div>
      <button class="run-button" id="example7-button">Run Example 7</button>

      <script>
        (function() {
          const btn = document.getElementById("example7-button");
          const codeArea = document.getElementById("example7-code");
          const outputDiv = document.getElementById("example7-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 8: Performance Optimization with DocumentFragment -->
    <div class="example">
      <h2>Example 8: Performance Optimization with DocumentFragment</h2>
      <p>Compares direct <code>appendChild</code> in a loop vs using a <code>DocumentFragment</code>.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example8-code">
// Step 1: Create a container
const ex8Container = document.getElementById("ex8Container") || document.createElement("div");
ex8Container.id = "ex8Container";
if (!ex8Container.parentNode) {
  document.body.appendChild(ex8Container);
}
ex8Container.innerHTML = ""; // Clear if rerun

// Step 2: Create a <div> with a <ul>
const perfDiv = document.createElement("div");
perfDiv.style.border = "1px solid #666";
perfDiv.style.padding = "10px";
perfDiv.textContent = "Performance Test";
ex8Container.appendChild(perfDiv);

const perfUl = document.createElement("ul");
perfUl.id = "ex8PerfUl";
perfDiv.appendChild(perfUl);

// Step 3: Direct append of 100 <li>
console.time("DirectAppend");
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Direct Item ${i}`;
  perfUl.appendChild(li);
}
console.timeEnd("DirectAppend");

// Clear list
perfUl.innerHTML = "";

// Step 4: Append 100 <li> via DocumentFragment
console.time("FragmentAppend");
const frag = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Fragment Item ${i}`;
  frag.appendChild(li);
}
perfUl.appendChild(frag);
console.timeEnd("FragmentAppend");
      </textarea>
      <div class="console-output" id="example8-console"></div>
      <button class="run-button" id="example8-button">Run Example 8</button>

      <script>
        (function() {
          const btn = document.getElementById("example8-button");
          const codeArea = document.getElementById("example8-code");
          const outputDiv = document.getElementById("example8-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 9: Event Listener Removal & Memory Leak Prevention -->
    <div class="example">
      <h2>Example 9: Removing Event Listeners &amp; Preventing Memory Leaks</h2>
      <p>Shows how to remove a listener before deleting its element.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example9-code">
// Step 1: Create a container and button
const ex9Container = document.getElementById("ex9Container") || document.createElement("div");
ex9Container.id = "ex9Container";
if (!ex9Container.parentNode) {
  document.body.appendChild(ex9Container);
}
ex9Container.innerHTML = ""; // Clear if rerun

const leakDiv = document.createElement("div");
leakDiv.id = "ex9LeakDiv";
ex9Container.appendChild(leakDiv);

const leakBtn = document.createElement("button");
leakBtn.textContent = "Click & Remove";
leakDiv.appendChild(leakBtn);

// Step 2: Define handler that removes itself & the whole <div>
function handleClick() {
  console.log("Button clicked—removing listener & element");
  leakBtn.removeEventListener("click", handleClick);
  if (leakDiv.parentNode) {
    leakDiv.parentNode.removeChild(leakDiv);
  }
}

leakBtn.addEventListener("click", handleClick);
console.log("Click the button to see it removed safely.");
      </textarea>
      <div class="console-output" id="example9-console"></div>
      <button class="run-button" id="example9-button">Run Example 9</button>

      <script>
        (function() {
          const btn = document.getElementById("example9-button");
          const codeArea = document.getElementById("example9-code");
          const outputDiv = document.getElementById("example9-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>


    <!-- Example 10: Complex TODO List with Validation, Styling, Delegation -->
    <div class="example">
      <h2>Example 10: Complex TODO List (Validation &amp; Delegation)</h2>
      <p>Combines element creation, input validation, event delegation, and dynamic styling.</p>
      <p><strong>Code:</strong></p>
      <textarea class="code-input" id="example10-code">
// Step 1: Create a container for TODO list
const ex10Container = document.getElementById("ex10Container") || document.createElement("div");
ex10Container.id = "ex10Container";
if (!ex10Container.parentNode) {
  document.body.appendChild(ex10Container);
}
ex10Container.innerHTML = ""; // Clear if rerun

// Step 2: Build input, add button, and <ul>
const todoDiv = document.createElement("div");
todoDiv.id = "ex10TodoDiv";
ex10Container.appendChild(todoDiv);

const todoInput = document.createElement("input");
todoInput.id = "ex10TodoInput";
todoInput.placeholder = "Enter TODO (2–20 chars)";
todoDiv.appendChild(todoInput);

const todoBtn = document.createElement("button");
todoBtn.id = "ex10TodoBtn";
todoBtn.textContent = "Add Item";
todoDiv.appendChild(todoBtn);

const todoUl = document.createElement("ul");
todoUl.id = "ex10TodoUl";
todoDiv.appendChild(todoUl);

// Step 3: Add minimal CSS via a <style> tag
const style = document.createElement("style");
style.textContent = `
  #ex10TodoDiv { margin: 20px 0; }
  #ex10TodoInput { padding: 5px; width: 200px; }
  #ex10TodoBtn { padding: 5px 10px; margin-left: 5px; }
  #ex10TodoUl li { margin: 5px 0; display: flex; align-items: center; }
  #ex10TodoUl li.done { text-decoration: line-through; color: gray; }
  button.ex10DeleteBtn { margin-left: 10px; color: red; }
`;
document.head.appendChild(style);

// Step 4: Validation function
function validateTodo(text) {
  if (typeof text !== "string") {
    console.warn("Validation failed: not a string");
    return false;
  }
  const trimmed = text.trim();
  if (trimmed.length < 2 || trimmed.length > 20) {
    console.warn("Validation failed: length must be 2–20");
    return false;
  }
  return true;
}

// Step 5: Add TODO item on button click
todoBtn.addEventListener("click", () => {
  const value = todoInput.value;
  if (!validateTodo(value)) return;

  const li = document.createElement("li");
  li.textContent = value.trim();

  // Toggle done state
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    console.log("Toggled done on:", li.textContent);
  });

  // Delete button inside each <li>
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "ex10DeleteBtn";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // don’t toggle “done”
    todoUl.removeChild(li);
    console.log("Deleted item:", li.textContent);
  });

  li.appendChild(delBtn);
  todoUl.appendChild(li);
  console.log("Added TODO item:", li.textContent);
  todoInput.value = ""; // clear input
});
      </textarea>
      <div class="console-output" id="example10-console"></div>
      <button class="run-button" id="example10-button">Run Example 10</button>

      <script>
        (function() {
          const btn = document.getElementById("example10-button");
          const codeArea = document.getElementById("example10-code");
          const outputDiv = document.getElementById("example10-console");

          btn.addEventListener("click", () => {
            outputDiv.innerHTML = "";

            const original = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              assert: console.assert,
              dir: console.dir,
              trace: console.trace,
              group: console.group,
              groupCollapsed: console.groupCollapsed,
              groupEnd: console.groupEnd,
              table: console.table,
              time: console.time,
              timeEnd: console.timeEnd
            };

            console.log = function(...args) {
              args.forEach(arg => {
                let text;
                if (typeof arg === 'object' && arg !== null) {
                  try {
                    text = JSON.stringify(arg, (k, v) => (typeof v === 'function' ? "[Function]" : v), 2);
                  } catch {
                    text = String(arg);
                  }
                } else {
                  text = String(arg);
                }
                outputDiv.innerHTML += text + '\n';
              });
            };
            console.info = console.log;
            console.warn = console.log;
            console.error = console.log;
            console.assert = function(cond, ...args) {
              if (!cond) {
                outputDiv.innerHTML += 'Assertion failed: ' + args.join(' ') + '\n';
              }
            };
            console.dir = function(obj) {
              try {
                outputDiv.innerHTML += JSON.stringify(obj, null, 2) + '\n';
              } catch {
                outputDiv.innerHTML += String(obj) + '\n';
              }
            };
            console.trace = function(label = '') {
              try {
                throw new Error('Stack Trace');
              } catch (err) {
                outputDiv.innerHTML += (label ? label + '\n' : '') + err.stack + '\n';
              }
            };
            console.group = function(label) {
              outputDiv.innerHTML += `┌─ Group: ${label}\n`;
            };
            console.groupCollapsed = function(label) {
              outputDiv.innerHTML += `┌─ Group (collapsed): ${label}\n`;
            };
            console.groupEnd = function() {
              outputDiv.innerHTML += '└─ End Group\n';
            };
            console.table = function(data) {
              try {
                const rows = Array.isArray(data) ? data : [data];
                const cols = Object.keys(rows[0] || {});
                outputDiv.innerHTML += cols.join('\t') + '\n';
                rows.forEach(r => {
                  outputDiv.innerHTML += cols.map(c => r[c]).join('\t') + '\n';
                });
              } catch {
                outputDiv.innerHTML += String(data) + '\n';
              }
            };
            console.time = function(label) {
              original.time(label);
              outputDiv.innerHTML += `Timer started: ${label}\n`;
            };
            console.timeEnd = function(label) {
              original.timeEnd(label);
              outputDiv.innerHTML += `Timer ended: ${label}\n`;
            };

            try {
              eval(codeArea.value);
            } catch (err) {
              outputDiv.innerHTML += `Error during execution: ${err.message}\n`;
            }

            Object.assign(console, original);
          });
        })();
      </script>
    </div>

  </div>
</body>
</html>
