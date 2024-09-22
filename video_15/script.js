// let numarr1 = [1, 2, 3]
// let numarr2 = [4, 5, 6]
// numarr1.push(numarr2)
// let numarr = numarr1.concat(numarr2)
// console.log(numarr1.flat(1));
// let numarr = [...numarr1, ...numarr2]
// console.log(numarr);

// let array=[1,2, [3,4], [3,[5,6,[6,7],7,8]], 9, 0, [2,[5,[6,[7,8]]]]]
// console.log(array.flat(4));
// console.log(Array.from("hello, world!"));
// console.log(Array.from(true));
let a=20
let a2=49
let a3="sixtynine"
a4 = true
console.log(Array.of(a, a2, Array.from(a3), a4));
let arr = (Array.of(a, a2, Array.from(a3), a4)).flat(Infinity)
console.log(arr);
