import type {DiceType} from "../types/dice.ts";
import {dice as exovoidDice} from "./exovoid.ts";
import {dice as l5rDice} from "./l5r.ts";
import {dice as splimoDice} from "./splimo.ts";

type Feature = "result_selection" | "complete_reroll" | "partial_reroll";

export class System {
    public name: string;
    public dice: Record<string, DiceType>;
    public features: Feature[];

    constructor(name: string, dice: Record<string, DiceType>, features: Feature[] = []) {
        this.name = name;
        this.dice = dice;
        this.features = features;
    }
}

export default {
    exovoid: new System("Exovoid", exovoidDice, ["complete_reroll"]),
    l5r: new System("Legend of the five Rings", l5rDice, ["result_selection", "partial_reroll"]),
    splimo: new System("Custom Splittermond", splimoDice, ["partial_reroll"]),
};