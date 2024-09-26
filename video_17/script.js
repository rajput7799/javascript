// Object singleton

const user1 = new Object()
const user2 = new Object()

user1.name1="Chetan Rajput"
user1.id1 = 7799
user2.name2="Deepak Negi"
user2.id2 = 8899
// const alluser = Object.assign({}, user1, user2);
const alluser = {...user1, ...user2};
// console.log(alluser);
// console.log(Object.keys(alluser));
// console.log(Object.values(alluser));
// console.log(...Object.entries(alluser));
