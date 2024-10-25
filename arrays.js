

var arr1 = [] // empty array 
 
arr2 = [1,4,5,6,3,9,4,6]  // Homogenious elements 

arr3 = ["Raju", true, 32,  undefined, null] // Hetiro 


console.log(arr3.length)

console.log(arr2[arr2.length-1])


// arr4 = [1,4,8,9] //[9,8,4,1]

// arr5 = arr4.sort()  //[1,4,8,9]

// arr6  = arr4.sort().reverse() // [9,8,4,1]

arr2 = [1,4,5,6,3,9,4,6]

arr3 = arr2.sort()

console.log(arr3)

arr4 = arr3.reverse()

console.log(arr4)

arr5 = arr3.concat(arr4)
console.log(arr5)


arr2 = [1,4,5,6,3,9,4,6]  // Homogenious elements 

arr3 = ["Raju", true, 32,  undefined, null] // Hetiro 

arr5 = arr2.concat(arr3)
console.log(arr5)

arr6 = ["Raju", "venkey"]

arr6.push("Maruthi")

arr6.push("Navya")



arr6.unshift("mamata")

console.log(arr6)

//Push() - add at end 

// unshift() - add at beginning 

arr6.pop()
arr6.pop()

arr6.shift()

console.log(arr6)

//pop() - remove at end 

// shift() - remove at beginning 

arr7 = ["Raju", "chennai", "Trainer"]

arr7[1] = "Bangalore"

console.log(arr7)

str1= arr7.join(" ") // convert array to strings 

console.log(str1)

str2 = "this is Javascript"

arr9 = str2.split(" ")  // converts string to array 
console.log(arr9)

arr8 = ["raju", "dhanu", "dhanu", "abhi", "sudheer"]

console.log(arr8.includes("dhanu"))

if(arr8.includes("dhanu")){
    console.log(" Present ")
}
else {

    console.log("Not present")
}


str = "Maruthi"

//output : "tpircsavaJ"

revstr = str.split("").reverse().join("")

console.log(revstr)

// 1 to 100 

// 3 = fizz 

// 5 - buzz 

// 3 and 5  - fizzbuzz 

// otherwise print number 

// 1

// 2

// fizz

// 4

// buzz

// fizz

// 7

// 8
// fizz
// buzz

// str = "madam"

// palindrome or not 

// Anagrams

// str1 = "army"

// str2 = "mary"

arr = [] 

const array2 = new Array("eat", "sleep"); // correct way 

arr12 = ["raju", "navya", "mamata", "sai", "venkey", "maruthi"]

console.log(arr12.indexOf("sai"))

arr12.forEach(x => {

    console.log(x)
    
});

//arr13 = arr12.slice(3)


arr14 = arr12.splice(5,2)
console.log(arr14)



// filter 
// map 
// reduce

// const numbers = [1, 2, 3, 4, 5, 6, 8, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]


// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num / 2);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15