import {
    SquareClass,
    CircleClass,
    ShapeClass,
    CustomError
} from "./classes";

try {
    const square = new SquareClass(3, 3, 2, 2);
    const circle = new CircleClass(3, 3, 20);
    // const errorSquare = new SquareClass(-3, 3, -20, 2);
    // const errorCircle = new CircleClass(-3, 3, -20);

    let squareToShapes = square as ShapeClass;
    let circleToShapes = circle as ShapeClass;

    console.log(squareToShapes);
    console.log(circleToShapes);

    console.log("Тип квадрата: ", typeof square);
    console.log("Чи є змінна 'квадрат' однією з класу квадратів? - ", square instanceof SquareClass);

    console.log("Чи є квадрат фігурою? - " + square.isAShape());
    console.log("Чи є коло фігурою? - " + circle.isAShape());

    console.log(`Площа квадрата: ${square.getArea()}`)
    console.log(`Площа кола: ${circle.getArea()}`)

    console.log(`Координати квадрата: ${square.getCoordinates()}`)
} catch (e: unknown) {
    if (e instanceof CustomError) {
        console.error(`[Помилка] ${e.title} - ${e.message}`);
    } else {
        console.error(`[Помилка] Непередбачувано виникла помилка: ${e}`);
    }
}

