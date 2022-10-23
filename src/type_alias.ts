interface User {
  name: string;
}

interface Action {
  do();
}

// 타입별칭은 type 키워드를 사용한다.
// 특정 인테페이스들을 합친 새로운 타입을 만들때 사용한다.
type UserAction = User & Action;

// 원시타입에 대한 별칭도 만들수 있다.
type StringOrNumber = string | number;

// 인터페이스와 비슷하게 사용할 수 도 있다.
type User2 = {
  name: string;
};
class User2Impl implements User2 {
  name: string;
  login(): boolean {
    return false;
  }
}

// 상태를 나타나는 문자들읍 집합처럼 사용할 수 도 있다.(enum)
type UserState = "PENDING" | "APPROVED" | "REJECTED";
function userCheck(user: User2Impl): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}
