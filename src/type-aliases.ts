export {}

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const example1 = {
  name: 'hoge',
  age: 29,
}

type Profile = {
  name: string;
  age: number;
}


const example2: Profile = {
  name: 'hoge',
  age: 29,
}

type Profile2 = typeof example1; // 元の構造の変化に追従するので便利!!
