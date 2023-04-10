function ucFirst(str) {
  firstLetter = str.slice(0, 1);
  firstLetterUp = firstLetter.toUpperCase();
  otherPart = str.slice(1);

  return `${firstLetterUp}${otherPart}`;
}

console.log (ucFirst('dada'));



