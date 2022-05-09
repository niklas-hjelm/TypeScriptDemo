import Animal from "./Animal";

export default class Dog extends Animal{

    constructor(color:string, age:number) {
        super(color, "dog", age);        
    }

    eat(): void {
        console.log("Dog is chowing");
    }
}