"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Bird extends Animal_1.default {
    constructor(color, age) {
        super(color, "bird", age);
    }
}
exports.default = Bird;
