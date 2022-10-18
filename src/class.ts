interface User {
  name: string;
}
interface Product {
  name: string;
  price: number;
}

class Cart {
  // 필드에 속성을 정의해야 한다.
  // 접근제한자를 가질수 있다. (private, public, protectd) default public
  private store: object;

  // 생성자 매개변수에서 접근제어자를 넣어주면 자동으로 클래스 안에 매개변수가 매칭된다.
  constructor(public user: User) {
    // this.user = user;
    this.store = {};
  }

  public put(id: string, product: Product) {
    this.store[id] = product;
  }

  get(id: string) {
    return this.store[id];
  }
}
