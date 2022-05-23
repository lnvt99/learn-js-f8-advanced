/*
    STRICT MODE
- Khi sử dụng strict mode thì các biến sẽ được kiểm tra nghiêm ngặt
*/

"use strict";
fullName = 'abcxyz';

function testFunc() {
    age = 18;
}

testFunc();

console.log(fullName);
console.log(age)