/**
 * 싱글톤 (Singleton)
 * 특정 클래스의 객체가 한 번만 생성되도록 보장함.
 * 실제로 안티 패턴으로 간주. 과도한 사용을 피해야함. 변경했을 때 다른 영역에 영향을 미칠 수 있고, 디버깅하기가 어려움.
 * 코드의 결합도를 높여서 싱글톤을 목킹하는 것이 어려울 수 있음.
 */

class President {
  private static instance: President;

  private constructor() {
    // 생성자 숨기기
  }

  public static getInstance(): President {
    if (!President.instance) {
      President.instance = new President();
    }

    return President.instance;
  }

  private clone(): void {
    // 복제 비활성화
  }

  private wakeup(): void {
    // 데이터 역직렬화(unserialize) 비활성화
  }
}
