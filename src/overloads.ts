export {}

// シグネチャ
function double(value: number): number;
function double(value: string): string;


// 実体、シグネチャで型制約を実現しているのでany型を使って構わない
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value + value;
  } else {
    throw 'value type is not supported';
  }
}

// function double(value: number): number {
//   return value * 2;
// }

console.log(double(100));

// function double(value: string): string {
//   return value + value;
// }

console.log(double('Go '));

// console.log(double(true)); // error!