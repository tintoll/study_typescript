interface Props {
  name: string;
  // 인덱스 타입 정의
  // 타입으로 string, number만 사용가능
  [key: string]: string;
}

// 문자형으로된 어떤 키든 할당할수있다.
const p: Props = {
  name: "dd",
  a: "a",
  b: "b",
};

// Props의 모든 프로퍼티의 키값을 union 형태로 반환
let keys: keyof Props;
// keys = 'name' | 'a' | 'b'
