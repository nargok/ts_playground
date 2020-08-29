export {};

let fooCompatible: any;
let barCompatible: string = "TS";

console.log(typeof fooCompatible);

// 互換性がある
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barInCompatible: number = 1;

// 互換性がない
// fooIncompatible = barInCompatible;

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumerLiteral: 1976 = 1976;
fooNumber = fooNumerLiteral;

// 構造的部分型
//   Animal interfaceとPerson classは関係がない
//   おなじプロパティで、同じ型であるかぎり互換性がある
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(33, "taro");
