export { }

// * owner
//   * 所有者
//   * 初期化時に設定、途中で変更できない、参照可能
// * secretNumber
//   * 個人番号
//   * 初期化時に設定、途中で変更できる、参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secreteNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('hoge', 1111);

console.log(card.owner);
// card.owner = 'fuyo'; // error!

console.log(card.debugPrint());

card.secretNumber = 23345;

console.log(card.debugPrint());