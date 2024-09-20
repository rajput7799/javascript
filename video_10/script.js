// Stack(Primitive) and Heap(Non-Primitive) Memory
let user1={
    name: "chetan",
    id: 299
}
let user2 = user1
console.table([user1,user2]);
user2.name="kamal"
console.table([user1,user2]);