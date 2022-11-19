"use strict";
//실행 yarn run tsc //yarn은 처음이라..
const message1 = 'hello wrold';
console.log(message1);
let count = 0; // 타입: 숫자
count += 10;
//count = '문자열';  // 이럴 경우엔 에러
const message = 'hello world'; // 문자열
const done = true; // 불리언 넣기도 가능
const numbers = [1, 2, 3]; //숫자 배열은 number[]
const messages = ['hi', 'hello']; // 문자열은 string []
//message.push(1); // 문자배열에 숫자 넣기 안됨
let mightBeUndefined = undefined; // string 또는 undefined 일수 있다 명시 가능
let nullableNumber = null; // number 또는 null 일수도 있음
let color = 'red'; // red, blue, green 중 하나
//color = 'black'; // 없는 색상은 에러
