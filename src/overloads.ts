export {}

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// 実体、シグネチャで型制約を実現しているのでany型を使って構わない
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); // error!