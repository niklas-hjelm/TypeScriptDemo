import {doSmth} from "./demo";
import Cat from "./Cat";
import Dog from "./Dog";
import Bird from "./Bird";

const doggo = new Dog("White", 2);
const gato = new Cat("Grey", 6);
const birb = new Bird("Rainbow", 10);

gato.whatAmI();
doggo.whatAmI();
birb.whatAmI();

doSmth("Test");