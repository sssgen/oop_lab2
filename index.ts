import { CustomError } from "./types";

try {
    const square = new Squares(2, 3, 4, 2);
    const circle = new Circles(3, 3, 20);

    console.log(circle.getArea());
} catch (e) {
    console.error(`Some error occured: ${e}`);
}

