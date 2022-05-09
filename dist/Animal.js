"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(color, name, age) {
        this.color = color;
        this.name = name;
        this.age = age;
    }
    whatAmI() {
        console.log(this.color);
        console.log(this.name);
        console.log(this.age);
    }
    eat() {
        console.log("IN ANIMAL");
    }
}
exports.default = Animal;
