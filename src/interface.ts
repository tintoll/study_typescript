// 속성 및 행위를 미리 정해놓는다.
interface TV {
  turnOn(): boolean;
  turnOff(): void;
}

const myTV: TV = {
  turnOn() {
    return false;
  },
  turnOff() {},
};

// 속성만 정의해놓는 형태로 많이 사용한다.
interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row: row,
        col: col,
      });
    }
  }
  return cells;
}

const board = createBoard();
