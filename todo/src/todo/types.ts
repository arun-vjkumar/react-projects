
export enum TodoStatus {
    OPEN = "OPEN",
    DOING = "DOING",
    DONE = "DONE",
    PAUSED = "PAUSED",
    ARCHIVED = "ARCHIVED"
}

export interface Card {
    _id: string;
    column_id: string;
    sequence: number;
    title: string;
    description: string;
    status: TodoStatus;
    created_date: Date;
    statuses: {status?: TodoStatus, date?: Date}[]
}

export interface Column {
    _id: string;
    sequence: number;
    title: string;
    created_date: Date;
    cards: Card[]
}