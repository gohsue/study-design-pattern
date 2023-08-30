/**
 * 심플 팩토리 (SimpleFactory)
 * 언제 사용하나?
 * 일부 로직이 포함된 객체를 반복적으로 사용할 때 전용 팩토리에 넣어서 사용.
 * 필요한 로직만 노출한다.
 */
interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements Door {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

/* 사용 예시 */
const door: Door = DoorFactory.makeDoor(100, 200);
const door2: Door = DoorFactory.makeDoor(50, 100);
