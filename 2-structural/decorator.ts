/**
 * 데코레이터 (Decorator)
 * 개별 객체(인스턴스)에 정적, 동적으로 공통된 패턴의 내용을 추가할 때 사용.
 * 각 인스턴스마다 단일 책임을 줘야할 때 유용하다.
 * Coffee - 기본 인터페이스
 * SimpleCoffee - 기본 객체
 * MilkCoffee, WhipCoffee, VanillaCoffee - 데코레이터
 */

interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

class MilkCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", milk";
  }
}

class WhipCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 5;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", whip";
  }
}

class VanillaCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 3;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", vanilla";
  }
}

/* 사용 예시 */
let someCoffee: Coffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription); // Simple Coffe, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription); // Simple Coffe, milk, whip, vanilla
