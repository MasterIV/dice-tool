import type {DiceSymbol, DiceType, DiceResult} from "../types/dice.ts";

type ResultKeys = "success" | "opportunity" | "strife";
export const results: Record<ResultKeys, DiceResult> = {
    success: {
        key: "success",
        name: "Success",
        image: "l5r/inverted_success.png",
    },
    opportunity: {
        key: "opportunity",
        name: "Opportunity",
        image: "l5r/inverted_opportunity.png",
    },
    strife: {
        key: "strife",
        name: "Strife",
        image: "l5r/inverted_strife.png",
    },
}

type SymbolKeys = "success" | "opportunity" | "success_opportunity" | "exploding" | "success_strife" | "opportunity_strife" | "exploding_strife";
export const symbols: Record<SymbolKeys, DiceSymbol> = {
    success: {
        name: "Success",
        images: ["l5r/inverted_success.png", "l5r/success.png"],
        exploding: false,
        result: [results.success],
    },
    opportunity: {
        name: "Opportunity",
        images: ["l5r/inverted_opportunity.png", "l5r/opportunity.png"],
        exploding: false,
        result: [results.opportunity],
    },
    success_opportunity: {
        name: "Success",
        images: ["l5r/inverted_success_opportunity.png", "l5r/success_opportunity.png"],
        exploding: false,
        result: [results.success, results.opportunity],
    },
    exploding: {
        name: "Exploding success",
        images: ["l5r/inverted_exploding.png", "l5r/exploding.png"],
        exploding: true,
        result: [results.success],
    },
    success_strife: {
        name: "Success with strife",
        images: ["l5r/inverted_success_strife.png", "l5r/success_strife.png"],
        exploding: false,
        result: [results.success, results.strife],
    },
    opportunity_strife: {
        name: "Opportunity with strife",
        images: ["l5r/inverted_opportunity_strife.png", "l5r/opportunity_strife.png"],
        exploding: false,
        result: [results.opportunity, results.strife],
    },
    exploding_strife: {
        name: "Exploding success with strife",
        images: ["l5r/inverted_exploding_strife.png", "l5r/exploding_strife.png"],
        exploding: true,
        result: [results.success, results.strife],
    },
}

type DiceKeys = "ring" | "skill";
export const dice: Record<DiceKeys, DiceType> = {
    ring: {
        name: "Ring dice",
        image: "d6_black.png",
        color: "white",
        sides: 6,
        variant: 0,
        symbols: [
            symbols.success,
            symbols.success_strife,
            symbols.exploding_strife,
            symbols.opportunity,
            symbols.opportunity_strife
        ],
    },
    skill: {
        name: "Skill dice",
        image: "d12_white.png",
        color: "black",
        sides: 12,
        variant: 1,
        symbols: [
            symbols.success,
            symbols.success,
            symbols.success_opportunity,
            symbols.success_strife,
            symbols.success_strife,
            symbols.exploding,
            symbols.exploding_strife,
            symbols.opportunity,
            symbols.opportunity,
            symbols.opportunity,
        ],
    },
}