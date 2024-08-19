// Data Number, String
let num = 252.123456789101112131400000000000
const txt = "Hello"
// Boolean
const a = true
// console.log(a)

// const health = 100
// const health2 = 200
// Comparision Operator, > , < , >= , <= , == , !=
// if (health == 80){
//     console.log("80% Heath")
// } else if (health == 50){
//     console.log("50% Heath")
// } else{
//     console.log("Below 50% Heath")
// }
// Nested If-Else

// console.log("Main execution")

// Logical Operator && || !
const err = false
// const y = true
// console.log(y)

// console.log(!err)

// if(!err){
//     console.log("Doing main task when no error")
// } else{
//     console.log("Fixing in background")
// }
// num = "25"
// if(typeof(num) == "number"){
//     console.log("Num is number")
//     console.log(num)
// }
let my_money = [0, 2.5, 4.3, 4.5, 7.5, 1.11, 9.7, 35, 66]
my_money.push(31, 32, 46, 64, 63)
console.log(my_money.toString())
console.log(my_money.length)
my_money.pop()
console.log(my_money.toString())
console.log(my_money.length)
my_money.shift()
console.log(my_money.toString())
console.log(my_money.length)
my_money = my_money.slice(0, 9)
console.log(my_money.toString())
console.log(my_money.length)
// Array = [0, 2.5, 4.3, 4.5, 7.5, 1.11, 9.7, 35, 31]
// Index =  0   1   2     3    4    5     6    7   8
// my_money.splice(5, 1)
// console.log(my_money.toString())
// console.log(my_money.length)

// Trying to delete an element from array without using splice


const { addition, substract } = require('./addition.js')

const something = addition(4, 5)

console.log(something)