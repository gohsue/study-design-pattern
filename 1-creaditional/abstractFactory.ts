/**
 * 추상 팩토리 (Abstract Factory)
 * 상호 의존성이 있을 때 사용. 재료 (Wooden/Iron) - 전문가 (Carpenter/Welder)
 * 예시에 따르면 재료에 따라 필요한 전문가를 캡슐화 시켜서 처리했기 때문에 IronDoor를 작업하는 전문가가 Carpenter이 될 일이 없음.
 * 공통되는 내용을 캡슐화(abstract)하고, 꺼내쓴다.
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

  class WoodenDoorFactory implements DoorFactory {
    makeDoor(): Door {
      return new WoodenDoor();
    }

    makeFittingExpert(): DoorFittingExpert {
      return new Carpenter();
    }
  }

  class IronDoorFactory implements DoorFactory {
    makeDoor(): Door {
      return new IronDoor();
    }

    makeFittingExpert(): DoorFittingExpert {
      return new Welder();
    }
  }

  /* 사용 예시 */
  const woodenFactory: DoorFactory = new WoodenDoorFactory();

  const woodenDoor: Door = woodenFactory.makeDoor();
  const woodenExpert: DoorFittingExpert = woodenFactory.makeFittingExpert();

  const ironFactory: DoorFactory = new IronDoorFactory();
  const ironDoor: Door = ironFactory.makeDoor();
  const ironExpert: DoorFittingExpert = ironFactory.makeFittingExpert();
}
