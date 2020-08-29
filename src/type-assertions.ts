export {};

let name: any = "ham";

// 型アサーション
let length = (name as string).length;
// let length = (<string>name).length; // こういう書き方ができるがJSXと区別しづらいので避ける

// length = "foo"; // error!
