import React from "react";
import { TodoCard } from "./TodoCard";
import { Card, Column } from "./types";

interface TodoListViewProps {
    column: Column
}

export const TodoListView = ({ column }: TodoListViewProps) => {
    return (
        <React.Fragment>
            {column.cards.map((card: Card) => <TodoCard key={card._id} card={card} />)}
        </React.Fragment>
    )
}