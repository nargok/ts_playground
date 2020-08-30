export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "hoge",
  age: 10,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "jiro",
  age: 43,
};

// friend.age++; // error

// readonlyの作り方
type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
