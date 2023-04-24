// let user1 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$400,000",
//   "picture": "https://placehold.it/32x32",
//   "age": 28,
//   "name": "Vlad Bitkin",
//   "gender": "male",
//   "greeting": "Hello, Vlad Bitkin! You have 7 unread messages.",
//   "favouriteFruit": "apple"
// };

// let users = [user1, user2];


function showSalary(data, age) {
  return data 
    .filter(x => x.age <= age)
    .map(x => `${x.name}, ${x.balance}`)
    .join('\n');
};

// console.log(showSalary(users, 30));