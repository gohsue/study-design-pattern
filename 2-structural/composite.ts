/**
 * 컴포지트 (Composite)
 * 가장 많이 사용하는 형태. 분할 디자인 패턴. 객체를 트리 구조로 '구성'하여 부분-전체 계층을 나타냄.
 * 즉, 전체(employee) - 부분 (Designer, Developer, Manager)
 * 객체의 인스턴스가 전체를 의미.
 */

interface Employee {
  name: string;
  salary: number;
  roles: string[];

  getName(): string;
  getSalary(): number;
  getRoles(): string[];
}

class Developer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Designer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Manager implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Organization {
  protected employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getNetSalaries(): number {
    let netSalary = 0;

    for (const employee of this.employees) {
      netSalary += employee.getSalary();
    }

    return netSalary;
  }
}

/* 사용 예시 */
const john = new Developer("John Doe", 12000);
const jane = new Designer("Jane Doe", 15000);
const chris = new Designer("Chris Doe", 18000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);
organization.addEmployee(chris);

console.log("Net salaries: " + organization.getNetSalaries());
