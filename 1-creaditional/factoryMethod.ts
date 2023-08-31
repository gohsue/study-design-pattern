/**
 * 팩토리 메서드 (Factory Method)
 * 클라이언트가 어떤 자식 클래스가 필요한지 모를 때 사용하기 좋음.
 * 자식 클래스에서 공통으로 호출하는 메서드를 부모 클래스에서 위임. (인스턴스화)
 */

interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions() {
    console.log("ask - develop");
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions() {
    console.log("ask - community");
  }
}

abstract class HiringManager {
  // Factory method
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

/* 사용 예시 */
const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
