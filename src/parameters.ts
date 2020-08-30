export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("taro", 23);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 12];
// const profile: Profile = ["Gloria", true]; // error

debugProfile(...profile);

// 関数の型であること
//   引数の型を返す
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
