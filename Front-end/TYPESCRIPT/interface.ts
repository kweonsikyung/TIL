//클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법

// 인터페이스 선언
interface Shape {
    getArea(): number;
}

// implements 키워드를 사용 해당 클래스가 Shape interface의 조건을 충족하겠다 명시
class Circle implements Shape {
    radius: number;
    // radius 값 지정
    constructor(radius: number) {
        this.radius = radius;
    }
    // 너비 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
});