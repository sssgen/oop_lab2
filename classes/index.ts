abstract class Shapes {
    abstract getArea(): number;
    abstract getPerimeter(): number;
}

class Squares extends Shapes {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    getArea(): number {
        return 2;
    }
    getPerimeter(): number {
        return 3;
    }
}

class Circles extends Shapes {
    private x1: number;
    private y1: number;
    private radius: number;

    constructor(x1: number, y1: number, radius: number) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.radius = radius
    }

    getArea(): number {
        return 4;
    }
    getPerimeter(): number {
        return 5;
    }
}