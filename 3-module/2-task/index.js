let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  return arr.filter((elem) => {
   return elem >= a && elem <= b;
    });
  };

// console.log(filterRange(arr, 1, 3));