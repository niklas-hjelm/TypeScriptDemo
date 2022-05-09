interface IEater{
    eat():void;
}

export default class Animal implements IEater{
    color: string;
    name: string;
    age: number;

    constructor(color:string,name:string, age:number) {
        this.color = color;
        this.name = name;
        this.age = age;    
    }
    
    whatAmI(){
        console.log(this.color);
        console.log(this.name);
        console.log(this.age);
    }

    eat(): void {
        console.log("IN ANIMAL");
        
    }
}