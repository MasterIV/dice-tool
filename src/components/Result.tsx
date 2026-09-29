import type {RollResult} from "../types/dice.ts";
import type {Feature} from "../systems";

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
            <img src={"/img/symbols/" + result.symbol.images[result.dice.variant ?? 0]}
                 alt={result.symbol.name} title={result.symbol.name}
                 style={{width: result.dice.scale}} />
        </div>}
    </div>;
}

interface ResultProps {
    result: RollResult[];
    onSelect?: (id: string) => void;
    message?: string;
    features?: Feature[];
}

export default function Result({result, onSelect = () => {}, message, features=[]}: ResultProps) {
    const showAll = !features.includes("result_selection");

    return result.length ? <div className="dices result">
        {message && <div className="message">{message}</div>}
        {result
            .filter(result => showAll || !result.exploded || result.visible)
            .map((result) => <Die result={result} key={result.id} onSelect={onSelect} />)}
    </div> : null;
}
