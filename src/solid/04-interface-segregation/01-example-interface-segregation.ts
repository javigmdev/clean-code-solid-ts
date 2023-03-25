interface Bird {
  //fly(): void; // without interface segregation
  eat(): void;
  run(): void;
}

// with interface segregation
interface FlyingBird {
  fly(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Ostrich implements Bird {
  /* without interface segregation
    fly(): void {
      throw new Error('this bird does not fly');
    }
  */
  eat(): void {}
  run(): void {}
}
