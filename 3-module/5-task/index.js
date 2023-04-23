// const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let strings = str.split(' ');
  let numbers = strings
    .filter((value) => isFinite(value))
    .map ((x) => +x)
    .sort((a, b) => {
      if (a > b) { return 1; }
      if (a < b) { return -1; }
      return 0;
    });
    
  let numbersLength = numbers.length;
  let numbersLast = numbersLength - 1;
  let min = numbers[0];
  let max = numbers[numbersLast];

  return {min, max};
}

// console.log(getMinMax(inputData));  { min: -5.8, max: 73  }