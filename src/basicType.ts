let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined; //최하위 타입
let nullValue: null; // 최하위 타입
let objValue: object;
let symbolValue: symbol; // ES6에서 나온 타입
let anyValue: any; // 최상위 타입

// symbolValue = Symbol(); // 함수로만 값을 정의할 수 있다.

// 인라인 타입정의
let user1: { name: string; score: number };
user1 = {
  name: "jay",
  score: 30,
};

let tuple2: [number, string];
tuple2 = [1, "hello"];

let tuple3: [number, number, number];
tuple3 = [1, 2, 3];

console.log(tuple2, tuple3);
