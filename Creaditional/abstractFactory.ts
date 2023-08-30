/**
 * 추상 팩토리 (Abstract Factory)
 *
 */

namespace AbstractFactory {
  interface Door {
    getDescription(): void;
  }

  class WoodenDoor implements Door {
    getDescription() {
      console.log("wood");
    }
  }

  class IronDoor implements Door {
    getDescription() {
      console.log("iron");
    }
  }

  interface DoorFittingExpert {
    getDescription(): void;
  }

  class Carpenter implements DoorFittingExpert {
    getDescription(): void {
      console.log("carpenter: wood");
    }
  }

  class Welder implements DoorFittingExpert {
    getDescription(): void {
      console.log("welder: iron");
    }
  }

  interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
  }
}
