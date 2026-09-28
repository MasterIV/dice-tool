import type {RollResult} from "../types/dice.ts";

interface DieProps {
    result: RollResult;
    onSelect: (id: string) => void;
}

function Die({result, onSelect}: DieProps) {
    let classes = "dice";

    if(result.exploded) classes += " bonus";
    if(result.selected) classes += " selected";

    return <div className={classes} onClick={() => onSelect(result.id)}>
        <img src={"/img/dice/" + result.dice.image} alt={result.dice.name} />
        {result.symbol && <div className="symbol">
            <img src={"/img/symbols/" + result.symbol.images[result.dice.variant]}
                 alt={result.symbol.name} title={result.symbol.name} />
        </div>}
    </div>;
}

interface ResultProps {
    result: RollResult[];
    onSelect: (id: string) => void;
    message?: string;
}

export default function Result({result, onSelect = () => {}, message}: ResultProps) {
    return result.length ? <div className="dices result">
        {message && <div className="message">{message}</div>}
        {result.map((result) => <Die result={result} key={result.id} onSelect={onSelect} />)}
    </div> : null;
}
