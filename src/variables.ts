// var는 함수 단위로 스코프를 가진다. if()는 해당안된다.
// let은  {} 블록 단위 스코프를 가진다.

let score; // 이렇게 하면 any타입으로 선언된다.
score = 30;
score = "30";

let score2 = 10; // 이렇게 하면 초기설정해준 number로 타입이 선언된다.
// score2 = "10"; // 에러 발생

let score3: number; // 변수선언시 타입을 지정할 수 있다.
// score3 = "30"; // 에러 발생

// const는 무조건 초기값을 주어 변수를 선언하기 때문에 타입을 지정안해도 된다.
const score4 = 100;
