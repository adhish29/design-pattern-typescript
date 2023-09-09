class Dog {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDogName = (): string => {
    return this.name;
  };
}

const d = new Dog("Romio");
console.log(d.getDogName());
