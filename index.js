// index.js

// Function to count the words
function count() {
    // Get the input text area element
    var textArea = document.querySelector('.Text');
    var text = textArea.value;
    var words = text.split(/\s+/);
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Word count: ' + words.length;
  }