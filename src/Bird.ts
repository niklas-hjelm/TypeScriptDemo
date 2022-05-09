import Animal from "./Animal";

export default class Bird extends Animal {
    constructor(color:string, age:number) {
        super(color, "bird", age);
    }
}