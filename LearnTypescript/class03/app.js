var number1 = 10;
var number2 = 12;
var number3 = 5;
var number4 = 2;
// var result:boolean = !(number1 < number4 || number3 > number2 && number1 > number4)
// number2 = number2 + number3
// number2 += number3
// number2 = number2 - number3
// number2 -= number3
// number2 *= number3
number2 /= number3;
var flag = true;
console.log("flag", typeof flag);
flag = 2;
console.log("flag", typeof flag);
flag = "2";
console.log("flag", typeof flag);
// OR Operator
// T || T = T
// T || F = T
// F || T = T
// F || F = F
// AND Operator
// T && T => T
// T && F => F
// F && T => F
// F && F => F
// var result:boolean = number1 < number2
// var result:boolean = number1 > number2
// var result:boolean = number1 >= number2
// var result:boolean = number1 <= number2
// var result:boolean = number1 == number2
// var result:boolean = number1 != number2
// var result:boolean = false || false
// var result:boolean = true || false && true || false && true;
// °F = (°C × 9/5) + 32
// write a typescript program, take input of temp in C and convert into F, and print into console? 
var tempC = 50;
var tempF = (tempC * 9 / 5) + 32;
console.log("Temp in F", tempF);
