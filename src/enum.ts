enum StarbuksGrade {
  WELCOME,
  GREEN,
  GOLD,
}

function getDiscount(v: StarbuksGrade): number {
  switch (v) {
    case StarbuksGrade.WELCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
}

console.log(StarbuksGrade);
// 자동으로 인덱스 숫자가 붙는다.
// {
//     '0': 'WELCOME',
//     '1': 'GREEN',
//     '2': 'GOLD',
//     WELCOME: 0,
//     GREEN: 1,
//     GOLD: 2
// }

// 초기값을 지정해줄수있다.
// WELCOME = 1 , WELCOME = "WELCOME"

console.log(getDiscount(StarbuksGrade.GREEN)); // 5
