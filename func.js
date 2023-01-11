// const value = require('./var');
// require, node 기본 제공 함수, 괄호 안에 var.js or var 둘 다 가능
// console.log(value);

const { odd, even } = require('./var');

function chkOddEven(number) {
    if(number % 2 != 0) {
        return odd;
    } else {
        return even;
    }
}

module.exports = chkOddEven; //module.exports는 파일에서 한 번만