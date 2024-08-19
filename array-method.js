// Advanced Javascript
// Array Method
// Method, Function, Routine, Subroutine 

let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77]

let salary2 = [5, 5, 67, 3, 61, 2, 1, 7]

let salary3 = [9, 9, 9, 9, 9, 9, 9, 9]

// Delete the last element
salary.pop()

// Advanced Array Method

// toString - Convert all elements to strings separated by ,

// join - join all elements by a specific separator, example, |
// => 23|35|42|52|52|68|63|34|63|61|97

// Delete first element
salary.shift()

// Insert at the front
salary.unshift(99)

// Accessing element salary[0] - 99

// Combining array - Merging array - concat

const new_salary = salary.concat(salary2, salary3)

// copyWithin

// new_salary.copyWithin(3, 0, 1)

// we want to replace 61 (index 9) by 9(index )

// console.log(new_salary.length)
// new_salary.copyWithin(9, 19, 20)

// console.log(new_salary.length)
// console.log(new_salary.toString())

// Loop inside array
// let sum = 0
// function processArray(element) {
//     sum += element
//     console.log(sum)
// }
// const processArray = (ele) => {
//     console.log(ele)
// }
// const callB = function (ele) {
//     console.log(`Element: ${ele}`)
// }

// Function call
// callB(2)

// new_salary.forEach(callB)
// Very common syntax
// arrow function | ()=>{}

// const ChineseLanguage = ["Mandarin", "Hakka", "Cantonese", "Hokkein", "Teochew"]

// console.log(ChineseLanguage.join('-'))
// ChineseLanguage.sort()

// console.log(ChineseLanguage.join('-'))

// // Reverse
// ChineseLanguage.reverse()
// console.log(ChineseLanguage.join('-'))

// console.log(new_salary)
// new_salary.sort((a, b) => b - a)
// console.log(new_salary)

// find

const people = [
    { name: "KK3", age: 17 },
    { name: "Chau Dara", age: 13 },
    { name: "Kevin", age: 15 },
    { name: "Wittenstein", age: 56 },
    { name: "陈", age: 25 },
    { name: "犬夜叉", age: 25 },
    { name: "🇰🇭", age: 24 }
]
// Get all objects from an array with age > 17
const peopleWith17Plus = people.filter((ele) => {
    return ele.age >= 17
})
// Find with age of 25
const peopleWith25 = people.find((ele) => {
    return ele.age == 25
})
// console.log(peopleWith25)
// console.log(peopleWith17Plus)

console.log(new_salary.join(' '))

const doubleSalary = new_salary.map((ele) => {
    return ele + 2
})

console.log(doubleSalary.join(' '))


const question = new_salary + doubleSalary

console.log(typeof (question))
// forEach, just focus on loop , loop each element
// map, perform computation on each element

const double2 = new_salary.forEach((ele) => {
    return ele + 2
})

// console.log(double2)
// some
const isTherePersonAge13 = people.some((ele) => {
    return ele.age == 12
})

console.log(isTherePersonAge13)



