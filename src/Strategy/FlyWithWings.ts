import { FlyBehavior } from "./FlyBehavior";

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("Im Flying");
  }
}
