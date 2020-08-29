export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("taro");
console.log(me.name);

const micheal = new English.Person("Micael", "Joseph", "Jackson");
console.log(micheal);

const osaka = new Japanese.Tokyo.Person("namba");
console.log(osaka.name);
