interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirment: string): string;
}

class KoreanProgrammer implements Person, Programmer {
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }
  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + "...";
  }

  loveKimchi() {
    console.log("love kimchi");
  }
}

const jay = new KoreanProgrammer("jay");

// 인터페이스에서 구현할거 이외에 좀더 구현이 필요한 내용을 정의해서 이 클래스를 확장해서 사용하도록 사용하게 한다.
abstract class Korean implements Person {
  public abstract jumin: number;

  constructor(public name: string) {}
  say(message: string): void {
    console.log(message);
  }

  abstract loveKimchi(): void;
}
