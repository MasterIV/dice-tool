import {type System} from "../systems";
import {useLoaderData} from "react-router";
import DicePool from "../components/DicePool.tsx";
import {useCallback, useState} from "react";


interface CompactProps {}

export default function Compact({}: CompactProps) {
    const {system} = useLoaderData<{system: System}>();

    const [pool, setPool] = useState<Record<string, number>>({});
    const changePool = useCallback((k:string, v: number) => {
        const value = Math.max(0, v|0);
        setPool(old => ({...old, [k]: value}));
    }, [setPool])

    return <DicePool dice={system.dice} selection={pool} onChange={changePool} />;
}