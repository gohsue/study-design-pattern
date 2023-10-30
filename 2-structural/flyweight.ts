/**
 * 플라이웨이트 (Flyweight)
 * 유사한 객체를 최대한 많이 공유함으로써 메모리 사용량이나 계산 비용을 최소화 할 때 사용.
 * 아래의 예시에서는 TeaMaker 내에서 사용하는 KarakTea 를 teaType 이 동일할 때는 재사용함.
 * 유사한 객체를 많이 공유하기 때문에 TeaMaker 와 TeaShop 사이에 강한 의존 관계를 가짐. (TeaMaker 와 KarakTea도 동일)
 */

class KarakTea {}

class TeaMaker {
  protected availableTea: Map<string, KarakTea> = new Map();

  public make(preference: string): KarakTea {
    if (!this.availableTea.has(preference)) {
      this.availableTea.set(preference, new KarakTea());
    }

    return this.availableTea.get(preference)!;
  }
}

class TeaShop {
  protected orders: Map<number, KarakTea> = new Map();
  protected teaMaker: TeaMaker;

  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker;
  }

  public takeOrder(teaType: string, table: number): void {
    this.orders.set(table, this.teaMaker.make(teaType));
  }

  public serve(): void {
    this.orders.forEach((tea, table) => {
      console.log(`Serving ${tea} to table## ${table}`);
    });
  }
}

/* 사용 예시 */
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less suger', 1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);

shop.serve();
// 1번 테이블에 차 제공
// 2번 테이블에 차 제공
// 5번 테이블에 차 제공
