let hello = "ddd";
const ddd = "sss";

// es5로 변환할수 없다
// let timeoutPromise = new Promise((resolve, rejct) => {
//   setTimeout(() => {
//     resolve("1 sec");
//   }, 1000);
// });

// timeoutPromise.then(console.log);

import add from "./util";
const v = add(1, 2);
console.log(v);
