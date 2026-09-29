
export interface DiceResult {
    key: string;
    name: string,
    image: string;
}

export interface DiceSymbol {
    name: string;
    images: string[];
    exploding: boolean;
    result: DiceResult[];
}

export interface DiceType {
    name: string;
    sides: number;
    image: string;
    symbols: DiceSymbol[];
    variant?: number;
    color?: string;
    scale?: string;
}

export interface RollResult {
    id: string;
    // dice map key of the used die
    type: string;
    dice: DiceType;
    symbol?: DiceSymbol;
    selected?: boolean;
    // id of the die that this one has exploded from
    exploded?: string;
    visible?: boolean;
}