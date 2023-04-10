// let schedule = {
//   'name': 'Vlad',
//   'long': 20,
// };

// let zero = {};


function isEmpty(obj) {
  for (let key in obj) {
    return false;
  } 
  return true;
  
}

// console.log(isEmpty(schedule));
// console.log(isEmpty(zero));