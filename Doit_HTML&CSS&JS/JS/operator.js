// 나누기 연산자와 나머지 연산자 비교하기
var numberOne = 15 / 2;
var numberTwo = 15 % 2;
console.log(numberOne);  // 7.5
console.log(numberTwo);  // 1

// 변수 뒤에 증가 연산자 붙이기
var a = 10;
var b = a++ + 5;
console.log(a); // 11
console.log(b); // 15

// 변수 앞에 증가 연산자 붙이기
var c = 10;
var d = ++c + 5;
console.log(c); // 11
console.log(d); // 16

// ==와 != 연산자와 ===, !== 연산자의 차이
console.log(3 == "3"); // true
console.log(3 != "3"); // false

console.log(3 === "3"); // false
console.log(3 !== "3"); // true

// 문자열의 비교
console.log("javascript" > "Javascript")  // true