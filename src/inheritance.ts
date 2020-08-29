export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  // わかりやすさを重視して、個別に初期化する
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    const parentMessage = super.run();
    console.log({ parentMessage });
    return `${super.run()} ${this.speed}km`;
  }
}

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 90).run());
