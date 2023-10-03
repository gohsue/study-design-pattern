/**
 * 퍼사드 (Facade)
 * 복잡한 하위 시스템을 가리고 사용하는 쪽에서 필요한 인터페이스만 단순화시켜 사용.
 * 코드를 리팩토링할 때 가장 많이 사용하는 방식.
 */

class Computer {

  getElectricShock() {
    console.log("Ouch!");
  }


  makeSound() {
    console.log( "Beep beep!");
  }


  showLoadingScreen() {
    console.log( "Loading..");
  }


  bam() {
    console.log( "Ready to be used!");
  }


  closeEverything() {
    console.log( "Bup bup bup buzzzz!");
  }


  sooth() {
    console.log( "Zzzzz");
  }


  pullCurrent() {
    console.log( "Haaah!");
  }

}

class ComputerFacade {
protected computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }

  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

/* 사용 예시 */
const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz