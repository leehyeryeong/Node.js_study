const util = require('util');
const crypto = require('crypto');

const dontUseWe = util.deprecate((x, y) => {
    console.log(x+y);
}, 'dontUseWe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!');
dontUseWe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf) => {
    console.log(buf.toString('base64'));
})
.catch((error) => {
    console.error(error);
});