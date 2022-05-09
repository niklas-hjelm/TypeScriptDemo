"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./demo");
const Cat_1 = __importDefault(require("./Cat"));
const Dog_1 = __importDefault(require("./Dog"));
const Bird_1 = __importDefault(require("./Bird"));
const doggo = new Dog_1.default("White", 2);
const gato = new Cat_1.default("Grey", 6);
const birb = new Bird_1.default("Rainbow", 10);
gato.whatAmI();
doggo.whatAmI();
birb.whatAmI();
(0, demo_1.doSmth)("Test");
