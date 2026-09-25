
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
    variant: number;
    color: string;
}