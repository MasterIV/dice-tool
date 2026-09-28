import type {DiceType, RollResult} from "../types/dice.ts";
import * as uuid from 'uuid';

export function rollDie (
    die: DiceType,
    exploded: boolean,
    callback: (r: RollResult) => void,
    subsequent?: (r: RollResult) => void,
) {
    const roll = (Math.random() * die.sides) | 0;
    const symbol = die.symbols[roll];

    callback({
        id: uuid.v4(),
        dice: die,
        exploded,
        symbol,
    });

    if( symbol && symbol.exploding )
        rollDie(die, true, subsequent || callback);
}

export function rollDice (dice: Record<string, DiceType>, selection: Record<string, number>) {
    const result: RollResult[] = [];

    Object.keys(dice).forEach(die => {
        for(let i = 0; i < selection[die]; i++)
            rollDie(dice[die], false, r => result.push(r));
    });

    return result;
}

export const rerollDice = (roll: RollResult[]) => {
    const result: RollResult[] = roll.map(r => ({...r}));

    result.forEach((rolled, i) => {
        if(rolled.selected)
            rollDie(rolled.dice, false, r => result[i] = r, r => result.push(r));
    });

    return result;
}