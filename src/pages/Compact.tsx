import {type Feature, type System} from "../systems";
import {Link, useLoaderData} from "react-router";
import DicePool from "../components/DicePool.tsx";
import {useCallback, useState} from "react";
import {Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Btn from "../components/Btn.tsx";
import type {RollResult} from "../types/dice.ts";
import {rerollDice, rollDice} from "../logic/roll.ts";
import Result from "../components/Result.tsx";
import RollSummary from "../components/RollSummary.tsx";

interface ButtonsProps {
    total: number;
    onRoll: () => void;
    onReset: () => void;
}

function Buttons ({total, onRoll, onReset}: ButtonsProps) {
    return <div className="submit">
        <Btn id="roll" onClick={onRoll}>Roll {total} dice!</Btn>
        <Btn id="reset" onClick={onReset}>Reset</Btn>
    </div>;
}

interface RerollProps {
    picked: number;
    onReroll: (partial: boolean) => void;
    features?: Feature[];
}

function Reroll({picked, onReroll, features=[]}: RerollProps) {
    return <div className="submit">
        {features.includes("partial_reroll") && <Btn id="re-roll" onClick={() => onReroll(true)}>Re-Roll selected {picked} dice!</Btn>}
        {features.includes("complete_reroll") && <Btn id="re-roll" onClick={() => onReroll(false)}>Re-Roll all dice!</Btn>}
    </div>;
}

interface CompactProps {}

export default function Compact({}: CompactProps) {
    const {system} = useLoaderData<{system: System}>();

    const [result, setResult] = useState<RollResult[]>([]);
    const [pool, setPool] = useState<Record<string, number>>({});

    const resetPool = useCallback(() => setPool({}), [setPool]);
    const changePool = useCallback((k:string, v: number) => {
        const value = Math.max(0, v|0);
        setPool(old => ({...old, [k]: value}));
    }, [setPool]);

    const onRoll = useCallback((pool: Record<string, number>) => {
        setResult(rollDice(system.dice, pool));
    }, [pool, system, setResult]);

    const onReroll = useCallback((partial: boolean) => {
        if(partial) {
            setResult(rerollDice(result));
        } else {
            const rollPool: Record<string, number> = {};
            result
                .filter(r => !r.exploded)
                .forEach(r => rollPool[r.type] = (rollPool[r.type]|0) + 1)
            setResult(rollDice(system.dice, rollPool));
        }
    }, [system, result, setResult]);

    const selectDie = useCallback((id: string) => {
        setResult(current => current.map(c => {
            if(c.id === id)
                return {...c, selected: !c.selected};
            if(c.exploded === id)
                return {...c, visible: true};
            return c;
        }));
    }, [setResult]);

    const total = Object.values(pool).reduce((a,v) => a+v, 0);
    const picked = result.filter(r => r.selected).length;

    return <>
        <div className="box">
            <Link to="/" className="back"><ArrowBackIcon /></Link>
            <Typography variant="h1">{system.name}</Typography>
        </div>

        <DicePool dice={system.dice} selection={pool} onChange={changePool} />
        <Buttons onRoll={() => onRoll(pool)} onReset={resetPool} total={total} />
        <Result result={result} onSelect={selectDie} features={system.features} />
        {result.length > 0 && <RollSummary result={result} features={system.features} />}
        {result.length > 0 && <Reroll picked={picked} onReroll={onReroll} features={system.features} />}
    </>;
}