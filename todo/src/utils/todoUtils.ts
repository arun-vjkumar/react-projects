import { Card, Column } from "../todo/types";

export function findColumnById(lists: Column[], columnId: string): Column | null {
    const column = lists.find((col) => col._id == columnId)
    return column ? column : null;
}

export function findIndexByColumnId(lists: Column[], columnId: string): number | null {
    for (let i=0; i<lists.length; i++) {
        if (lists[i]._id === columnId){
            return i;
        }
    }
    return null;
}

export function updateColumnCard(column: Column, card: Card): Column | undefined {
    for (let i=0; i<column.cards.length; i++) {
        if (column.cards[i]._id == card._id) {
            column.cards[i] = card;
            return column;
        }
    }
}