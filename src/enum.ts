export {}

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.September);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

// 後で追加もできる
enum COLORS {
  YELLOW = '#FFFF00',
}
COLORS.YELLOW;

COLORS.BLACK