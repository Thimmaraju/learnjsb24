

// //OOPS - Object oriented Programming 
// // 1. Encapsualtion
 
// //    Binding the data between methods in a class 

// class employee{

//   empdeatils(empname, empplace, empage){

//           this.EmployeeName = empname
//           this.EmployeePlace = empplace
//           this.EmployeeAge = empage
//   }

//   displayEmpDetails(){

//     console.log(this.EmployeeName, this.EmployeePlace, this.EmployeeAge)


//   }

// }

// const emp1 = new employee()

// //emp1.empdeatils("Raju", "Blr", 32)

// emp1.displayEmpDetails()

// //2 Inheritance 


// class A {

//     m1(){

//         console.log("This is Method 1 from A")
//     }

//     m2(){

//         console.log("This is Method 2 from A")
//     }

//     m3(){

//         console.log("This is Method 3 from A")
//     }
// }



// class B extends A {

//     m4(){

//         console.log("This is Method 4 from B")
//     }

//     m5(){

//         console.log("This is Method 5 from B")
//     }

//     m6(){

//         console.log("This is Method 6 from B")
//     }
// }



// class C extends B {

//     m7(){

//         console.log("This is Method 7 from C")
//     }

//     m8(){

//         console.log("This is Method 8 from C")
//     }

//     m9(){

//         console.log("This is Method 9 from C")
//     }
// }

// const obj1 = new C()

// obj1.m1() // A

// obj1.m4() // B

// obj1.m9() // C

// // 3. Ploymorphism 

// // Method Overriding 

// // Method Overloading 


// class A {

//      a = 20
//     display(){

//         console.log("This is Method from Parent")
//     }

//     add(num1, num2){

//         console.log(num1+num2)
//     }
// }

// class B extends A{

//     a = 30

//     display(){

//         console.log("This is Method from child")
//     }

    
//     add(num1, num2, num3){

//         console.log(num1+num2+num3)
//     }
// }

// const raju = new A()

// raju.display()

// console.log(raju.a)
// //Method Overriding 

// raju.add(7,4,8)

//Method Overloading 


//4. Prototype 

class A {

     a = 20
    display(){

        console.log("This is Method from Parent")
    }

    add(num1, num2){

        console.log(num1+num2)
    }
}

A.prototype.b = 30 



A.prototype.m5 = function (){

    console.log("This is a method outside of the class")
}
const obj1 = new A()

const obj2 = new A()

console.log(obj1.b)

console.log(obj2.b)


obj1.m5()

obj2.m5()

// async await 


// describe {


//     it async  (){

//         await command 1

//         await command 2 
//     }

//     it()


// }

//Promises 

// Sets

//Maps 

// Reg 