export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "taro", underTwenty: false };

// How to write index signature
// { [ index typeForIndes ]: typeForValue }
profile.name = "taro";
profile.age = 43;
profile.nationality = "Japan";

console.log({ profile });
