export { }

class Person {
  constructor(public name: string, protected age: number) { }
}

const me = new Person("watachi", 7);
console.log(me);