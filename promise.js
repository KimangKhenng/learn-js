// Promise 

// Javascript: I promise you a result
// return type: Promise<Type>
// It needs some time to process
// Find some name in database, 10M, it takes sometimes
// const person = db.find("Chau Dara") // return type Promise
// When the operation is ready
// person.then((result) =>{
//      result.age
//      result.name    
//})
/**
 * person.age
 * person.dateOfBirth
 * person.name
 */

// class : dictate what an object look like 
// const ob = new Object({
//     name: "KK"
// })

// const ob1 = {
//     name: "KK"
// }

const { students } = require('./students')

// Example of DB
const db = {
    find: (name) => {
        return new Promise((resolve, reject) => {
            //When the operation is successful
            // DB logic
            // setTimeout(() => {
            //     if (name.includes("1")) {
            //         reject("No name should include number")
            //     } else {
            //         const person = students.find((value) => {
            //             return value.name == name
            //         })
            //         resolve(person)
            //     }
            // }, 10)
            if (name.includes("1")) {
                reject("No name should include number")
            } else {
                const person = students.find((value) => {
                    return value.name == name
                })
                resolve(person)
            }
        })
    }
}

const person = db.find("Frank")
console.log("Hey")
person.then((result) => {
    console.log(result)
}).catch((reason) => {
    console.log(reason)
})
console.log("Execute till this line")
// Use person.name to register in some service
console.log("Execute till this line 2")
console.log("Execute till this line 3")
console.log("Execute till this line 4")

// async function main() {
//     try {
//         const person = await db.find("Frank")
//         console.log(person.name)
//     } catch (err) {
//         console.log("Error")
//         console.log(err)
//     }
// }

// main()
