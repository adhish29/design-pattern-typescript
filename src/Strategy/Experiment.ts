import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";
import { FlyWithWings } from "./FlyWithWings";
import { Quack } from "./Quack";
import { Squeak } from "./Squeak";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display(): void {
    console.log("I'm a real Mallard duck");
  }
}

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("I'm a Model duck");
  }
}

function f() {
  const mallard: Duck = new MallardDuck();
  mallard.performFly();
  mallard.performQuack();
  console.log("🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆");

  const model: Duck = new ModelDuck();
  model.performQuack();
  model.setQuackBehavior(new Squeak());
  model.performQuack();
}
f();
