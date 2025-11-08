import { BaseItem } from "./data";

export const getRandomItems = <T>(items: T[], n: number): T[] => {
    return items
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
};


export function selectItemsByIds<T extends BaseItem>(items: T[], ids: number[]): T[] {
    return items
        .filter(item => ids.includes(item.id))
        .map(item => structuredClone(item));
}
