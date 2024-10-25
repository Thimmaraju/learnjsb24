var num1 = 23

var num2 = 23.7

p1price = Number("120")

p2price = Number("60")

totalprice = Number("180")

// p1price +p2price == totalprice

// 180 == 180

  num3 = 180.7

  num4 = parseInt(num3)

  console.log(num4)

  num5 = 567958978560987506870856097809568709858n

  num6 = 500000000000 //5e11

  num7 = 0.000000007 //7-e9


  num8 = "4" - 2   // 2

  console.log(num8)

  num9 = "Raju" - 10 //NaN

  console.log(num9)

  num10 = 10+undefined  //NaN

  console.log(num10)

//   carprice = 25000

//   delivery = undefined

//   totalpriceCar = NaN 

console.log(isNaN(num10))

//const b = new Number(45);

str = "127.6"

num11 = parseFloat(str) // 127.6

num12 = String(20)  // "20"

num13 = num11.toString()

//Math.min() and Math.max()

maxnumber = Math.max(2,6,7,8,12,56,77,23,54,34)

console.log(maxnumber)

minnumber = Math.min(2,6,7,8,12,56,77,23,54,34)

console.log(minnumber)

randomNum = Math.random()

console.log(randomNum)

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomInRange(100,200))


date = 25/10/1994   // 25 OCT 1994

//moment().subtract(10, 'days').calendar() // 10/15/2024