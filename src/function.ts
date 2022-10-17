// 인자에 타입정의해줘야함. ?로 들어올수도 있고 안올수도 있게 설정가능함
// 반환 타입을 정의안해줘도 되고 정의할 수 도 있음
function minus(x: number, y: number): number {
  return x - y;
}

// minus(1, "2");

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
// 함수 오버로딩 : 타입스크립트에서만 가능
function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;
// 구현부
function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림" };
  } else if (type === "아이스크림") {
    return { b: "아이스크림" };
  } else {
    throw new Error("unsupported type");
  }
}

const s = store("아이스크림");
console.log(s.b);
