/**
 * 책임 연쇄 (Chain of Responsibility)
 * 객체의 연쇄를 구축. 즉, 같은 객체(Account)를 extends한 여러 클래스들은 본인이 해결하지 못할 때
 * 책임을 계속 전가시켜 문제를 해결. 적절한 핸들러를 찾을 때 까지 계속 이동함.
 * 책임을 넘기기위해서 다음으로 넘길 객체(successor)을 정의하는 로직이 항상 포함되어 있어야함.
 */

abstract class Account {
  protected successor?: Account;
  protected balance: number;

  public setNext(account: Account): void {
    this.successor = account;
  }

  public pay(amountToPay: number): void {
    if (this.canPay(amountToPay)) {
      console.log(
        `${this.constructor.name}을 이용해 ${amountToPay} 달러 결제 완료!`
      );
      return;
    }

    if (this.successor) {
      console.log(
        `${this.constructor.name}을 이용하여 지불할 수 없음. 처리 중...`
      );
      this.successor.pay(amountToPay); // setNext를 통해 세팅한 Account로 책임 전달
      return;
    }

    throw new Error('잔액이 충분한 어카운트가 존재하지 않음.');
  }

  public canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

/**
 * 사용 예시
 * 은행에서 지불할 수 없으면 페이팔, 페이팔이 지불할 수 없으면 비트코인 (책임 연쇄 방식)
 */

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);
// 결과
// 은행을 이용하여 지불할 수 없음. 처리 중...
// 페이팔을 이용하여 지불할 수 없음. 처리 중...
// 비트코인을 이용해 259 달러 결제 완료!
