import type {DiceSymbol, DiceType, DiceResult} from "../types/dice.ts";

type ResultKeys = "success" | "anxiety" | "moon" | "sliver" | "xp" | "armor" | "stamina_regen" | "anxiety_regen";
export const results: Record<ResultKeys, DiceResult> = {
    success: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    anxiety: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    anxiety_regen: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    armor: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    moon: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    sliver: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    stamina_regen: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
    xp: {
        key: "success",
        name: "Success",
        image: "splimo/inverted_success.png",
    },
}

type SymbolKeys = "success" | "success_explode" | "success_anxiety" | "moon" | "moon_explode" | "sliver" | "xp" | "armor" | "stamina_regen" | "anxiety_regen";
export const symbols: Record<SymbolKeys, DiceSymbol> = {
    success: {
        name: "Success",
        images: ["splimo/success.png"],
        exploding: false,
        result: [results.success],
    },
    anxiety_regen: {
        name: "Anxiety regeneration",
        images: ["splimo/anxiety_regen.png"],
        exploding: false,
        result: [results.anxiety_regen],
    },
    armor: {
        name: "Armor",
        images: ["splimo/armor.png"],
        exploding: false,
        result: [results.armor],
    },
    moon: {
        name: "Moon",
        images: ["splimo/moon.png"],
        exploding: false,
        result: [results.moon],
    },
    moon_explode: {
        name: "Exploding moon",
        images: ["splimo/moon_explode.png"],
        exploding: true,
        result: [results.moon],
    },
    sliver: {
        name: "Sliver",
        images: ["splimo/sliver.png"],
        exploding: false,
        result: [results.sliver],
    },
    stamina_regen: {
        name: "Stamina regeneration",
        images: ["splimo/stamina_regen.png"],
        exploding: false,
        result: [results.stamina_regen],
    },
    success_anxiety: {
        name: "Success with anxiety",
        images: ["splimo/success_anxiety.png"],
        exploding: false,
        result: [results.success, results.anxiety],
    },
    success_explode: {
        name: "Exploding success",
        images: ["splimo/success_explode.png"],
        exploding: true,
        result: [results.success],
    },
    xp: {
        name: "Experience",
        images: ["splimo/xp.png"],
        exploding: false,
        result: [results.xp],
    },
}

type DiceKeys = "standard" | "reckless" | "insight" | "defense";
export const dice: Record<DiceKeys, DiceType> = {
    standard: {
        name: "Standard dice",
        image: "d20_green.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success_explode,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.sliver,
            symbols.moon,
            symbols.xp
        ],
    },
    insight: {
        name: "Insight dice",
        image: "d20_blue.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.moon_explode,
            symbols.anxiety_regen,
            symbols.stamina_regen,
            symbols.stamina_regen,
            symbols.moon,
            symbols.moon,
            symbols.moon,
            symbols.moon,
            symbols.moon,
            symbols.xp
        ],
    },
    reckless: {
        name: "Reckless dice",
        image: "d20_red.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success_explode,
            symbols.success_anxiety,
            symbols.success_anxiety,
            symbols.success_anxiety,
            symbols.sliver,
            symbols.sliver,
            symbols.sliver,
            symbols.sliver,
            symbols.xp
        ],
    },
    defense: {
        name: "Defense dice",
        image: "d20_brown.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success,
            symbols.success,
            symbols.armor,
            symbols.armor,
            symbols.armor,
            symbols.armor,
            symbols.armor,
            symbols.success_anxiety,
            symbols.success_anxiety,
            symbols.sliver,
            symbols.sliver,
            symbols.moon,
            symbols.xp
        ],
    },
}