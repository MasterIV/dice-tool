import type {DiceType} from "../types/dice.ts";
import {dice as exovoidDice} from "./exovoid.ts";
import {dice as l5rDice} from "./l5r.ts";
import {dice as splimoDice} from "./splimo.ts";

export class System {
    public name: string;
    public dice: Record<string, DiceType>;

    constructor(name: string, dice: Record<string, DiceType>) {
        this.name = name;
        this.dice = dice;
    }
}

export default {
    exovoid: new System("Exovoid", exovoidDice),
    l5r: new System("Legend of the five Rings", l5rDice),
    splimo: new System("Custom Splittermond", splimoDice),
};