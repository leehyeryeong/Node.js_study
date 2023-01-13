const {odd, even} = require('./var'); //구조 분해 할당 시 속성명 == 변수명
const chkNumber = require('./func');

function chkStringOddEven(str) {
    if(str.length % 2 != 0) {
        return odd;
    } else {
        return even;
    }
}

console.log(chkNumber(10));
console.log(chkStringOddEven('hello'));