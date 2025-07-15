// 1. Palindrome logic (unchanged)
function palindrome(str) {
  var regularStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = regularStr.split('').reverse().join('');
  return regularStr === reverseStr;
}

// 2. Grab DOM elements
var input  = document.getElementById('palindrome-input');
var btn    = document.getElementById('check-btn');
var result = document.getElementById('result');

// 3. Event listener
btn.addEventListener('click', function() {
  var text = input.value.trim();

  // Clear previous
  result.textContent = '';
  result.className = '';

  // Handle empty input
  if (!text) {
    result.textContent = '❗ Enter a word or phrase';
    result.classList.add('error');
    return;
  }

  // Run the check
  var isPal = palindrome(text);
  if (isPal) {
    result.textContent = '✅ Palindrome!';
    result.classList.add('success');
  } else {
    result.textContent = '❌ Not a palindrome';
    result.classList.add('error');
  }
});

// 4. Optional: allow Enter key
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') btn.click();
});
