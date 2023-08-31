/**
 * 프로토타입 (Prototype)
 * 객체를 복사할 때 사용. ts에서는 Object.assign을 사용하면 쉽게 가능.
 * 기존 객체와 유사한 객체가 필요하거나 복제에 비해 생성 비용이 많이 드는 경우에 사용함.
 */

class Sheep {
  protected name: string;
  protected category: string;

  constructor(name: string, category: string = "sheep") {
    this.name = name;
    this.category = category;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  getCategory(): string {
    return this.category;
  }
}

const original: Sheep = new Sheep("Jolly");

const clone: Sheep = Object.create(original);
clone.setName("Dolly");
