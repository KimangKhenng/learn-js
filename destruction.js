// Destruction - Destroy // Popular syntax in frontend
// Destructing assignment

// const { educations } = require("./object")

const person = {
    age: 24,
    first_name: "Dara",
    last_name: "Chau",
    height: 156,
    weight: 47,
    educations: [
        { school: "Chhbar Ampov", year: 2011 },// 0
        { school: "RUPP", year: 2015 }, // 1,
        { school: "SeTech", year: 2011 }, // 1,
        { school: "CamTech", year: 2009 } // 1
    ],
    married: false,
    fullname: function () {
        return this.last_name + " " + this.first_name
    },
    edu_background: function () {
        let all_schools = ""
        for (let i = 0; i < this.educations.length; i++) {
            if (i == this.educations.length - 1) {
                all_schools = all_schools + this.educations[i].school + "-" + this.educations[i].year
            } else {
                all_schools = all_schools + this.educations[i].school + "-" + this.educations[i].year + " ,"
            }
        }
        return all_schools
    }

}

const { educations, ...newPerson } = person

// console.log(educations)

// const sectec = educations.find((ele) => {
//     return ele.school == "SeTech"
// })

// spread

// console.log(newPerson)


let salary = [23, 35, 42, 52, 52, 68, 63, 34, 63, 61, 97, 77]
