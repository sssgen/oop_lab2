export class CustomError {
    public title: string;
    public message: string;

    constructor(error: CustomError) {
        this.title = `**${error.title}`;
        this.message = `${error.message}`;
    }
}

export abstract class ShapeClass {
    abstract getArea(): number;
    abstract getPerimeter(): number;

    isAShape() {
        return true;
    }
}

export class SquareClass extends ShapeClass {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        if (Math.abs(x1 - x2) !== Math.abs(y1 - y2)) {
            throw new CustomError({ title: "Неправильні значення", message: "Координати фігури мають формувати квадрат" });
        }
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    getArea(): number {
        return Math.abs(this.x2 - this.x1) ** 2;
    }

    getPerimeter(): number {
        return 4 * Math.abs(this.x2 - this.x1);
    }

    getCoordinates() {
        return `(${this.x1}; ${this.y1}), (${this.x2}; ${this.y2})`;
    }
}

export class CircleClass extends ShapeClass {
    private x1: number;
    private y1: number;
    private radius: number;

    constructor(x1: number, y1: number, radius: number) {
        super();
        if (radius <= 0) {
            throw new CustomError({ title: "Неправильне значення", message: "Радіус має бути позитивним або більше за 0" });
        }
        this.x1 = x1;
        this.y1 = y1;
        this.radius = radius;
    }

    getArea(): number {
        return Math.abs(Math.PI * this.radius ** 2);
    }

    getPerimeter(): number {
        return Math.abs(2 * Math.PI * this.radius);
    }
}
