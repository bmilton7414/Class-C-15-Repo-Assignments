// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
var count = 0;
  var vowels = "aeiouAEIOU";
  
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  
  return count;
};
