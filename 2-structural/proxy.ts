/**
 * 프록시 (Proxy)
 * 하나의 클래스가 다른 클래스의 기능을 나타냄. (단순히 실제 객체의 전달하거나 추가적인 로직을 제공할 때 사용.)
 * 아래는 비밀번호를 정확하게 입력해야만 열리는 문을 프록시 패턴으로 적용.
 * 기존 문 (LabDoor)에 비밀번호를 입력하는 기능을 추가한 문 (SecuredDoor)을 입혀서 사용.
 */

interface Door {
  open(): void;
  close(): void;
}

class LabDoor implements Door {
  open(): void {
    console.log("Opening lab door");
  }

  close(): void {
    console.log("Closing the lab door");
  }
}

class SecuredDoor implements Door {
  protected door: Door;

  constructor(door: Door) {
    this.door = door;
  }

  open(password?: string): void {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  authenticate(password?: string): boolean {
    return password === "p@ssw@rd";
  }

  close(): void {
    this.door.close();
  }
}

/* 사용 예시 */
const door = new SecuredDoor(new LabDoor());
door.open(); // X

door.open("p@ssw@rd"); // O
door.close(); // Closing lab door
