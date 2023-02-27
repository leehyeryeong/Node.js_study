const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

//WHATWG 방식
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('----------------------------------------');

//기존 방식
const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse(): ', parseUrl);
console.log('url.format(): ', url.format(parseUrl));