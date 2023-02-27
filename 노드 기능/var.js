const odd = "홀수입니다";
const even = "짝수입니다";

exports.odd = odd;
exports.even = even;
// module.exports = { odd, even };

// module.exports === exports === { odd, even }
// module.exports = {
//     odd,
//     even,
// }

// export default {
//     // odd: odd,
//     // even: even,
//     // 객체, 최신 문법은 key와 value 변수가 같은 경우 대입 생략 가능
//     odd,
//     even
// };