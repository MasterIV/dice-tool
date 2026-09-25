import type {DiceSymbol, DiceType, DiceResult} from "../types/dice.ts";

type ResultKeys = "success" | "trigger" | "complication" | "xp" | "botch" | "wound"| "minion" | "cyberware" | "adrenaline";
export const results: Record<ResultKeys, DiceResult> = {
    success: {
        key: "success",
        name: "Success",
        image: "exovoid/success.png",
    },
    trigger: {
        key: "trigger",
        name: "Trigger",
        image: "exovoid/success.png",
    },
    complication: {
        key: "complication",
        name: "Complication",
        image: "exovoid/compication.png",
    },
    botch: {
        key: "botch",
        name: "Botch",
        image: "exovoid/botch.png",
    },
    xp: {
        key: "xp",
        name: "Experience",
        image: "exovoid/xp.png",
    },
    wound: {
        key: "wound",
        name: "Wound",
        image: "exovoid/wound.png",
    },
    minion: {
        key: "minion",
        name: "Minion wound",
        image: "exovoid/minion.png",
    },
    cyberware: {
        key: "cyberware",
        name: "Cyberware malfunction",
        image: "exovoid/cyberware.png",
    },
    adrenaline: {
        key: "success",
        name: "Adrenaline",
        image: "exovoid/adrenaline.png",
    },
}

type SymbolKeys = "success" | "success_explosive" | "success_trigger" | "trigger" | "complication" | "xp" | "botch" | "wound"| "minion" | "cyberware" | "adrenaline";
export const symbols: Record<SymbolKeys, DiceSymbol> = {
    success: {
        name: "Success",
        images: ["exovoid/success.png"],
        exploding: false,
        result: [results.success],
    },
    success_explosive: {
        name: "Explosive success",
        images: ["exovoid/success_explosive.png"],
        exploding: true,
        result: [results.success],
    },
    success_trigger: {
        name: "Success and Trigger",
        images: ["exovoid/success_trigger.png"],
        exploding: false,
        result: [results.success, results.trigger],
    },
    trigger: {
        name: "Trigger",
        images: ["exovoid/trigger.png"],
        exploding: false,
        result: [results.trigger],
    },
    complication: {
        name: "Complication",
        images: ["exovoid/complication.png"],
        exploding: false,
        result: [results.complication],
    },
    botch: {
        name: "Botch",
        images: ["exovoid/botch.png"],
        exploding: false,
        result: [results.botch],
    },
    xp: {
        name: "xp",
        images: ["exovoid/xp.png"],
        exploding: false,
        result: [results.xp],
    },
    wound: {
        name: "Wound",
        images: ["exovoid/wound.png"],
        exploding: false,
        result: [results.wound],
    },
    minion: {
        name: "Minion wound",
        images: ["exovoid/minion.png"],
        exploding: false,
        result: [results.minion],
    },
    cyberware: {
        name: "Cyberware malfunction",
        images: ["exovoid/cyberware.png"],
        exploding: false,
        result: [results.cyberware],
    },
    adrenaline: {
        name: "Adrenaline",
        images: ["exovoid/adrenaline.png"],
        exploding: false,
        result: [results.adrenaline],
    },
}

type DiceKeys = "default" | "aptitude" | "expertise" | "injury";
export const dice: Record<DiceKeys, DiceType> = {
    default: {
        name: "Standard dice",
        image: "d20_blue.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success_explosive,
            symbols.success_explosive,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.trigger,
            symbols.trigger,
            symbols.xp,
            symbols.botch,
        ],
    },
    aptitude: {
        name: "Aptitude dice",
        image: "d20_green.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.trigger,
            symbols.trigger,
            symbols.complication,
        ],
    },
    expertise: {
        name: "Expertise dice",
        image: "d20_yellow.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.success_trigger,
            symbols.success_trigger,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.success,
            symbols.trigger,
            symbols.trigger,
            symbols.trigger,
            symbols.trigger,
            symbols.complication,
        ],
    },
    injury: {
        name: "Standard dice",
        image: "d20_black.png",
        color: "white",
        sides: 20,
        variant: 0,
        symbols: [
            symbols.wound,
            symbols.wound,
            symbols.wound,
            symbols.wound,
            symbols.wound,
            symbols.minion,
            symbols.minion,
            symbols.minion,
            symbols.minion,
            symbols.minion,
            symbols.cyberware,
            symbols.adrenaline,
        ],
    },
}