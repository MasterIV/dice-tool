import type {DiceType, RollResult} from "../types/dice.ts";
import * as uuid from 'uuid';

export function rollDie (
    type: string,
    dice: DiceType,
    exploded: string | undefined,
    callback: (r: RollResult) => void,
    subsequent?: (r: RollResult) => void,
) {
    const roll = (Math.random() * dice.sides) | 0;
    const symbol = dice.symbols[roll];
    const id = uuid.v4();

    callback({ id, type, dice, exploded, symbol });

    if( symbol && symbol.exploding )
        rollDie(type, dice, id, subsequent || callback);
}

export function rollDice (dice: Record<string, DiceType>, selection: Record<string, number>) {
    const result: RollResult[] = [];

    Object.keys(dice).forEach(die => {
        for(let i = 0; i < selection[die]; i++)
            rollDie(die, dice[die], undefined, r => result.push(r));
    });

    return result;
}

export const rerollDice = (roll: RollResult[]) => {
    const result: RollResult[] = roll.map(r => ({...r}));

    result.forEach((rolled, i) => {
        if(rolled.selected)
            rollDie(rolled.type, rolled.dice, rolled.exploded,
                    r => result[i] = {...r, visible: true},
                    r => result.push(r));
    });

    return result;
}