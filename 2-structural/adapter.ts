/**
 * 어댑터 (Adapter)
 * 어탭터 패턴을 사용하면 호환되지 않는 객체르 ㄹ어댑ㅊ터로 가맜 다른 클래스와 호환이 되도록 해줌.
 * A 인터페이스 또는 클래스 -> B 인터페이스 또는 클래스
 */

interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  roar(): void {}
}

class AsianLion implements Lion {
  roar(): void {}
}

class Hunter {
  hunt(lion: Lion): void {
    lion.roar();
  }
}

// 야생개도 사자와 같이 헌터와 호환이 되도록 처리
class WildDog {
  bark(): void {}
}

class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar(): void {
    this.dog.bark();
  }
}

/* 사용 예시 */
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
