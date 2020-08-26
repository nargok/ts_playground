export {}

// 別名をあたえているから、= をつける
type ObjectType = {
  name: string,
  age: number,
}

interface ObjectInterface {
  name: string,
  age: number,
}

let object: ObjectType = {
  name: 'hoge',
  age: 42,
}

let object2: ObjectInterface = {
  name: 'hoge',
  age: 42,
}