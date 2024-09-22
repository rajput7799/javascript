let myArr= [1, 2, 3, 4, 5, 6]

// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(10));
// let arrstr= myArr.join('😊')
// console.log(arrstr);
console.log("original: ", myArr);
let n1=myArr.slice(1,4)
console.log(n1);
console.log("after slice: ", myArr);
let n2=myArr.splice(1,4)
console.log(n2);
console.log("after splice: ", myArr);