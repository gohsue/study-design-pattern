/**
 * 명령 (Command)
 * 특정 동작을 수행하거나, 이벤트를 트리거할 때 필요한 모든 정보를 캡슐화하는 방식
 * 예시) 컨트롤러의 켜는 기능, 끄는 기능 모두 클래스화
 */

class Bulb {
    public turnOn(): void {
        console.log("전구가 켜짐")
    }

    public turnOff(): void {
        console.log("전구가 꺼짐")
    }
}

interface Command {
    execute(): void;
    undo(): void;
    redo(): void;
}

/* Command */
class TurnOn implements Command {
    protected bulb: Bulb;

    constructor(bulb: Bulb) {
        this.bulb = bulb;
    }

    public execute(): void {
        this.bulb.turnOn();
    }

    public undo(): void {
        this.bulb.turnOff();
    }

    public redo(): void {
        this.execute();
    }
}

class TurnOff implements Command {
    protected bulb: Bulb;

    constructor(bulb: Bulb) {
        this.bulb = bulb;
    }

    public execute(): void {
        this.bulb.turnOff();
    }

    public undo(): void {
        this.bulb.turnOn();
    }

    public redo(): void {
        this.execute();
    }
}

/* 호출자 (Invoker) */
class RemoteControl {
    public submit(command: Command): void {
        command.execute();
    }
}

/* 사용 예시 */
const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // 전구가 켜짐
remote.submit(turnOff); // 전구가 꺼짐

