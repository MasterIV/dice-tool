import Btn from "./Btn.tsx";
import type {DiceType} from "../types/dice.ts";
import type {FocusEventHandler} from "react";


interface DieSelectorProps {
    id: string;
    type: DiceType;
    value: number;
    onChange: (id: string, value: number) => void;
}

function DieSelector({id, type, value, onChange}: DieSelectorProps) {
    const inc = () => onChange(id, value + 1);
    const dec = () => onChange(id, value - 1);
    const set: FocusEventHandler<HTMLInputElement> = (e) => onChange(id, Number(e.target.value));

    return <div className="dice">
        <Btn onClick={inc}>+</Btn>
        <img src={"img/dice/" + type.image} />
        <Btn onClick={dec}>-</Btn>
        <input type="text" value={value} onBlur={set} style={{color: type.color}} />
    </div>;
}


interface DicePoolProps {
    dice: Record<string, DiceType>;
    selection: Record<string, number>;
    onChange: (id: string, value: number) => void;
}

export default function DicePool({dice, selection, onChange}: DicePoolProps) {
    return <div className="dices">
        {Object.keys(dice).map(id => <DieSelector
            type={dice[id]}
            id={id}
            key={id}
            value={selection[id]}
            onChange={onChange} />)}
    </div>;
}