
// function add(){

//     console.log("This is function")
// }

// add()

class Abcd{


    a = 10

    static b = 20

    constructor(value , value2){

        console.log(value)

        console.log(value2)

        console.log("Myself Raju")
    }

     add(){

        console.log("this is a method")
    }

    multiply(num1, num2){

        console.log(num1*num2)
    }

    addition(num1, num2){

        console.log(this.a)
       this.add()
       return num1+num2
    }
}

const xyz = new Abcd(4,7)

// xyz.add()

// xyz.displayname()

// console.log(xyz.b)

 //const pqr = new Abcd()

// xyz.multiply(4,6)

// result = xyz.addition(6,9)

// console.log(result)

//Abcd.add()