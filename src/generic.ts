// 아래의 r 변수에 여러타입이 들어가게 하기 위해서 Generic을 사용할 수 있다.
function cretePromise<T>(r: T, timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(r);
    }, timeout);
  });
}

// 제네릭으로 선언을 해서 어떤 값을 넣느냐에 따라 해당 타입이 결정되어진다.
cretePromise(1, 100).then((v) => console.log(v));

// 반환값으로도 제네릭을 호출할 수 있다.
function createTuple<T1, T2>(a: T1, b: T2): [T1, T2] {
  return [a, b];
}
const tuple = createTuple("hi", 1223);

////////////////////////////////////////////
// 제네릭은 클래스 및 인터페이스에서 활용될 수 있다.
class LocalDb<T> {
  constructor(private key: string) {}
  add(v: T) {
    localStorage.setItem(this.key, JSON.stringify(v));
  }
  get(): T {
    const item = localStorage.getItem(this.key);
    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  }
}
interface User {
  name: string;
}
const userJay = new LocalDb<User>("user");
userJay.add({ name: "jay" });
// 제네릭을 사용하지 않으면 getUser는 any타입이다.
// 제네릭을 정의하면 User 타입으로 나오게 된다.
const getUser = userJay.get();

////////////////////////////////////////////
interface Vesitable {
  v: string;
}
interface Meat {
  m: string;
}

interface Cart2<T> {
  // 조건부타입 으로 설정하기
  // Vesitable이명 반환값이 Vesitable이고 아니면 Meat이 반환되도록 처리 가능
  getItem(): T extends Vesitable ? Vesitable : Meat;
}

const ca1: Cart2<string> = {
  getItem() {
    return {
      m: "",
    };
  },
};
