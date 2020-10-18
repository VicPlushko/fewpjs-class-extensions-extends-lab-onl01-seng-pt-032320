class Polygon {
    constructor(array) {
        this.array = array;
        this.count = this.array.length
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, currentVal) => acc + currentVal)
    }

    
}

class Triangle extends Polygon {

    get isValid() {
        let s1 = this.array[0];
        let s2 = this.array[1];
        let s3 = this.array[2];
        return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
    }
}

class Square extends Polygon {

    get isValid() {
        let sq1 = this.array[0];
        let sq2 = this.array[1];
        let sq3 = this.array[2];
        let sq4 = this.array[3];
        
        return ((sq1 === sq2) && (sq2 === sq3) && (sq3 === sq4))
    }

    get area() {
        return this.array[1] ** 2
    }
}

