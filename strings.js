

// str = "dklbgfnb"

// str = 'jmfhdbvkj'

// str = `gfgji`

// sent1 = `mamata's place "Bangalore"`

// stuname =  "Usha"

// stuname2 = "Navya"

// // You can not use in build keywords as variables 

// str =  `${stuname} and ${stuname2} are friends`

// console.log(str)

// str2 = stuname + " "+stuname2 

// console.log(str2)

// str3 = Number("20")

// str4 = 50

// num1 = Number("10")

// total = str3 + str4

// console.log(total)

// // case sensitive

// arr12 = ["raju", "navya", "mamata", "sai", "venkey", "maruthi"]

// arr12[2] = "Bhagya"

// str = "JavaScript"

// console.log(str[4])

// str[4] = "s" // this is possible 

// console.log(str[4])

// Strings are immutable

str = "JavaScript"

console.log(str[4])

console.log(str.charAt(4))

console.log(str.length)

console.log(str.substring(0,4))

str4 = "      raju     "

console.log(str4)
str5 = str4.trim()
console.log(str5)
console.log(str5.length)

actualstr = "Forgot your password? ".trim()

expectstr = "Forgot your password?"

console.log(actualstr == expectstr)

str5 = "RAju"

expectstr = "Forgot Your Password?"

str6 = expectstr.toUpperCase()

console.log(str6)

str7 = expectstr.toLowerCase()

console.log(str7)

price = Number("$420,000".replace("$", "").replace(",", ""))

console.log(price)