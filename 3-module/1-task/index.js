let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];


function namify(x) {
  let names = x.map((hu) => hu.name);
  return names;
}

// console.log(namify(users));
