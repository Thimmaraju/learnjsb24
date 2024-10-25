

var student  = {

    stuname : "Mamata",
    place : "Bangalore",
    course : "Cypress",
    age : 24, 
    offline : true
}

console.log(typeof(student))

console.log(student.stuname)

console.log(typeof(student.age))

console.log(student['course'])

// describe("test suitename",()=>{

//     const student  = {

//         stuname : "Mamata",
//         place : "Bangalore",
//         course : "Cypress",
//         age : 24, 
//         offline : true
//     }
    
// it("test name",()=>{


// })

// })

console.log(student.fathername)

student['companyname'] = "TCS"

console.log(student.companyname)

delete student.course

console.log(student.course)

student['place'] = "Chennai"

console.log(student.place)

const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time",
    menu5 : "Recruitment"
}

// for in 

for (let i in menuitems){

    console.log(menuitems[i])
}

// var x = 10

// x = 20 

const car = {

    model : 2015,
    Manufacturer: "Skoda"
}

car["owner"] = "Maruthi"

console.log(car.owner)

