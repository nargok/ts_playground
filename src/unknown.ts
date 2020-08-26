export {}

const kansu = () => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu(); // 一旦ふわっと型をつけておきたい Factoryパターンとかで使えるか？

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; // error!

if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}