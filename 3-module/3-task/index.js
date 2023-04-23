function camelize(str) {
  if (!str) {
    return str;
  }

  return str
    .split('-')
    .map ((elem, index) => {
      if (index === 0) {
        return elem;
      }

      let firstLetter = elem.slice(0,1);
      let otherLetters = elem.slice(1);
      let result = `${firstLetter.toUpperCase()}${otherLetters}`

      return result;
    })

    .join('');
}

// console.log(camelize('-webkit-transition'));