/**
 * 생성자 (Builder)
 * 객체가 생성될 때 점층적 생성자 (tomato, cheese 등이 들어있는지 안들어있는지에 대한 유무에 따라 달라지는) 인 경우에 유용.
 * 팩토리 패턴은 생성이 한단계이지만, 빌더 패턴은 생성을 여러 단계를 거쳐서 진행하기 때문에 좀더 다양한 단계로 나눌 수 있음.
 */

class Burger {
  protected size: number;
  protected cheese: boolean = false;
  protected pepperoni: boolean = false;
  protected lettuce: boolean = false;
  protected tomato: boolean = false;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

class BurgerBuilder {
  public size: number;
  public cheese: boolean = false;
  public pepperoni: boolean = false;
  public lettuce: boolean = false;
  public tomato: boolean = false;

  constructor(size: number) {
    this.size = size;
  }

  addPepperoni(): BurgerBuilder {
    this.pepperoni = true;
    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;
    return this;
  }

  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

/* 사용 예시 */
const burger = new BurgerBuilder(14)
  .addCheese()
  .addLettuce()
  .addTomato()
  .build();
