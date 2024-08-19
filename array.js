let motor = ["click", "wave", "icon", "dream", "ADV"]
// motor : 0 1 2 3 4
let index_to_delete = 2
const new_motor = motor.slice(0, index_to_delete)
const new_motor_2 = motor.slice(index_to_delete + 1)
// console.log(new_motor)
// console.log(new_motor_2)
// concat 
motor = new_motor.concat(new_motor_2)
// console.log(motor)

let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77]

// const sum = salary[0] + salary[1] + salary[2] + salary[3] + salary[4]

let a = 5;
//a = a + 1
a++
// for (initialization, condition, increment)
let sum = 0
for (let i = 1; i <= salary.length; i = i + 1) {
    sum = sum + salary[i - 1] // Update 'sum' value by existing 'sum' + salary[i]
    //console.log(i, " Hello")
    //console.log(`${i} Hello`)
}
console.log("Total Salary", sum)

// let multiple = 1
// for (let i = 1; i < 18; i++) {
//     multiple = multiple * i
// }
// console.log(multiple)
