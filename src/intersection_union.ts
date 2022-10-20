// intersection
interface User {
  name: string;
}

interface Action {
  do();
}

// User와 Action을 합친 결과를 반환하고 싶다.
// 새로운 인터페이스를 만드는게 아니라 반환값으로 & 연산자를 이용해서 User & Action으로 지정하면 된다.
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}

const userAction = createUserAction(
  { name: "jay" },
  {
    do() {
      console.log("haha");
    },
  }
);
userAction.do();
console.log(userAction.name);

// union
// 비교함수에서 2개 타입의 매개변수를 가지게 하고 싶을때 | 연산자를 이용해서 정의할수 있다
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    // 이안에서는 타입이 number로 인식해서 number가 사용할 수 있는 메서드들이 자동완성된다.
    return x === y ? 0 : x > y ? 1 : -1;
  }

  if (typeof x === "string" && typeof y === "string") {
    // 이안에서는 타입이 string로 인식해서 string가 사용할 수 있는 메서드들이 자동완성된다.
    return x === y ? 0 : x > y ? 1 : -1;
  }

  throw Error("not supported type");
}

const v = compare(2, 2);
console.log([3, 2, 1].sort(compare));
console.log(["c", "a", "b"].sort(compare));

// type assertion
function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
  // 여기에서 2가지 타입에대한 조건을 처리해야하는데 이때 type Assction을 이용한다
  // 매번 아래와 같이 사용하기는 불편하는 체크하는 함수 isAction를 만들어서 사용하자
  if ((<Action>v).do) {
    (<Action>v).do();
  }

  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
