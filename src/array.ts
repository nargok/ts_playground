export {}

let numbers: number[] = [1, 2, 3];

// 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3];

let strings: string[] = ["tokyo", "osaka", "okinawa"];

let nijigenhairetsu: number[][] = [
  [156, 100, 123],
  [383, 333, 333],
];
console.log(nijigenhairetsu);

let hairetsu: (number | boolean | string)[] = [1, false, "Japan"];

console.log({hairetsu});