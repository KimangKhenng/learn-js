const educations = [
    { school: "Chhbar Ampov", year: 2011 },
    { school: "RUPP", year: 2015 }
]

let car = {}

car.wheels = 4
car.name = "Chevorlet"
car.color = "White"
car.type = "SUV"

// Person
// age, name, height, weight // Properties of object
// Object
const person = {
    age: 24,
    first_name: "Dara",
    last_name: "Chau",
    height: 156,
    weight: 47,
    educations: [
        { school: "Chhbar Ampov", year: 2011 },// 0
        { school: "RUPP", year: 2015 } // 1
    ],
    married: false,
    car: car,
    fullname: function () {
        return this.last_name + " " + this.first_name
    },
    // edu_background: function () {
    //     // Practice
    //     // Return all school name separated by ,
    //     // Chhbar Ampov - Year,RUPP - Year,Japan - Year
    //     let all_schools = ""
    //     for (let i = 0; i < this.educations.length; i++) {
    //         if (i == this.educations.length - 1) {
    //             all_schools += ` ${this.educations[i].school} - ${this.educations[i].year}`
    //         } else {
    //             all_schools += `${this.educations[i].school} - ${this.educations[i].year} , `
    //         }
    //         // all_schools = all_schools + this.educations[i].school + ","
    //     }
    //     return all_schools
    // }
    // edu_background: function () {

    //     // Return all school name separated by ,
    //     // Chhbar Ampov , RUPP, Japan
    //     let all_schools = ""
    //     for (let i = 0; i < this.educations.length; i++) {
    //         if (i == this.educations.length - 1) {
    //             all_schools = all_schools + this.educations[i].school + " - " + this.educations[i].year
    //         } else {
    //             all_schools = all_schools + this.educations[i].school + " - " + this.educations[i].year + " ,"
    //         }
    //     }
    //     return all_schools
    // }
    edu_background1: function () {
        let all_schools = ""
        for (let i = 0; i < this.educations.length; i++) {
            if (i == educations.length - 1) {
                all_schools = all_schools + this.educations[i].school + "-" + this.educations[i].year
            } else {
                all_schools = all_schools + this.educations[i].school + "-" + this.educations[i].year + " ,"
            }
        }
        // Return
        return all_schools
    }

}
// 2 ways to access properties
// object.property
// object["property"]
// console.log(person["age"])
// console.log(person.age)

// Declare empty object

// How to add education background in educations
person.educations[0].year = 2014

person.educations.push({ school: "Japan", year: 2021 })
// console.log(person.edu_background1())


exports.person = person
exports.educations = educations
// module.exports = { person, educations }