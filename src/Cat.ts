import Animal from "./Animal";

export default class Cat extends Animal{

    constructor(color:string, age:number) {
        super(color, "cat", age);        
    }
    eat(): void {
        console.log("Cat is nibbling");
    }
}