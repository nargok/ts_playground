export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 23));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// 関数の型であること
//   infer R 戻り値の型を拾いたい
//   inferとは推論する、といういみ
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
