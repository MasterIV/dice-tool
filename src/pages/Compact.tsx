import {type System} from "../systems";
import {Link, useLoaderData} from "react-router";
import DicePool from "../components/DicePool.tsx";
import {useCallback, useState} from "react";
import {Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Btn from "../components/Btn.tsx";
import type {RollResult} from "../types/dice.ts";
import {rollDice} from "../logic/roll.ts";
import Result from "../components/Result.tsx";

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

interface CompactProps {}

export default function Compact({}: CompactProps) {
    const {system} = useLoaderData<{system: System}>();

    const [result, setResult] = useState<RollResult[]>([]);
    const [pool, setPool] = useState<Record<string, number>>({});

    const resetPool = useCallback(() => setPool({}), [setPool]);
    const changePool = useCallback((k:string, v: number) => {
        const value = Math.max(0, v|0);
        setPool(old => ({...old, [k]: value}));
    }, [setPool])

    const total = Object.values(pool).reduce((a,v) => a+v, 0);
    const onRoll = useCallback((pool: Record<string, number>) => {
        setResult(rollDice(system.dice, pool))
    }, [pool, system, setResult])

    const selectDie = useCallback((id: string) => {
        setResult(current => current.map(c => c.id == id ? {...c, selected: !c.selected} : c));
    }, [setResult]);

    return <>
        <div className="box">
            <Link to="/" className="back"><ArrowBackIcon /></Link>
            <Typography variant="h1">{system.name}</Typography>
        </div>

        <DicePool dice={system.dice} selection={pool} onChange={changePool} />
        <Buttons onRoll={() => onRoll(pool)} onReset={resetPool} total={total} />
        <Result result={result} onSelect={selectDie} />
    </>;
}