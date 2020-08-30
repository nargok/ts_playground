export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 23));

type ReturnTypeFromAdd = ReturnType<typeof add>;
