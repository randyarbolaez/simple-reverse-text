function reverseString(e) {
  e.preventDefault();
  let word = document.getElementById('word').value;
  let reversedWord = document.getElementById('reversed-word');

  reversedWord.innerHTML = word
    .split('')
    .reverse()
    .join('');
}
