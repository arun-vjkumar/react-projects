import React, { useState } from "react";
import { AddItemButton, BoardContainer, NewItemInput } from "../styles";
import { AddNewColumn } from "./AddNewColumnForm";
import { TodoColumn } from "./TodoColumn";
import { useTodoAppState } from "./TodoStateContainer";
import { Column } from "./types";


export const Board = () => {
    const {state, dispatch}  = useTodoAppState();
    const [columnName, setColumnName] = useState("")

    const handleAddNewColumn = (title: string) => {
        dispatch({ type: "ADD_COLUMN", payload: {title}})
    }

    return (
        <BoardContainer>
            {
                state && state.lists.map((column: Column) => <TodoColumn key={column._id} column={column} />)
            }
            <AddNewColumn handleAddNewColumn={handleAddNewColumn} />
        </BoardContainer>
    )
}