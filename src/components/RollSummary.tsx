import type {DiceResult, RollResult} from "../types/dice.ts";
import type {Feature} from "../systems";

interface SummaryEntry {
    symbol: DiceResult;
    count: number;
}

function summarize(result: RollResult[]) {
    const summary: Record<string, SummaryEntry> = {};

    result.filter(r => r.symbol).forEach(({symbol}) => {
        symbol?.result?.forEach(r => {
            if (!summary[r.key])
                summary[r.key] = {symbol: r, count: 0};
            summary[r.key].count++;
        });
    });

    return summary;
}

interface IconProps {
    symbol: DiceResult;
    value: number;
}

function Icon({symbol, value}: IconProps) {
    return <div>
        <span className="summaryIcon"><img src={"/img/symbols/" + symbol.image} alt={symbol.name}/></span>
        <span className="summaryDescription">{symbol.name}</span>
        <span className="summaryCount">× {value}</span>
    </div>;
}

interface SummaryProps {
    result: RollResult[];
    features?: Feature[];
}

export default function RollSummary({result, features = []}: SummaryProps) {
    const summary = summarize(features.includes("result_selection") ? result.filter(r => r.selected) : result);

    return <div className="summary">
        {Object.values(summary).map(({symbol, count}) => <Icon key={symbol.key} symbol={symbol} value={count}/>)}
    </div>;
}