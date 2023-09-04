/**
 * 브릿지 (Bridge)
 * 추상화를 구현에서 분리하여 두 개가 독립적으로 변경할 수 있도록 하는 것을 브릿지라고 표현.
 * 즉 상속이 아닌 구성의 형태. 아래의 예시 경우 Theme을 추상화하여, 독립적으로 변경이 가능하게 계층 구조를 분리함. (계층 구조가 트리가 아닌 서로 독립된 구조)
 */

/* 페이지 */
interface WebPage {
  theme: Theme;
  getContent(): string;
}

class About implements WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers implements WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

/* 테마 */
interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor(): string {
    return "Dark Black";
  }
}

class LightTheme implements Theme {
  getColor(): string {
    return "Off white";
  }
}

class AquaTheme implements Theme {
  getColor(): string {
    return "Light blue";
  }
}

/* 사용 예시 */
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent);
console.log(careers.getContent);
