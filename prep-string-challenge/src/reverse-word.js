function reverseWord(word) {
  return word && reverseWord(word.slice(1)) + word.charAt(0);
}
