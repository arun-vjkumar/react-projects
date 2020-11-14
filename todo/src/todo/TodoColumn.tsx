import React, { useState } from "react"
import { AddItemButton, ColumnContainer, ColumnTitle } from "../styles"
import { CardAddOrEditModal } from "./CardAddOrEditModal"
import { TodoListView } from "./TodoListView"
import { useTodoAppState } from "./TodoStateContainer"
import { Card, Column, TodoStatus } from "./types"
import {v1 as uuid} from "uuid";

interface ColumnsProps {
    column: Column;
}


export const TodoColumn = ({ column }: ColumnsProps) => {
    const [showAddNewCard, setShowAddNewCard] = useState(false);
    const { state, dispatch } = useTodoAppState();

    const handleClose = () => {
        setShowAddNewCard(false);
    }

    const handleOnSumbit = (title: string, description: string) => {
        const newCard: Card = {
            _id: uuid(),
            column_id: column._id,
            sequence: state.lists.length + 1,
            title,
            description,
            status: TodoStatus.OPEN,
            created_date: new Date(),
            statuses: []
        }
        dispatch({type: "ADD_TASK", payload: { columnId: column._id, card: newCard }})
    }

    return (
        <ColumnContainer>
            <ColumnTitle> {column.title} </ColumnTitle>
            <TodoListView column={column}/>
            <AddItemButton dark={true} onClick={() => setShowAddNewCard(true)}>
                + Add New Card
            </AddItemButton>
            <CardAddOrEditModal onClose={handleClose} showEditModal={showAddNewCard} isEdit={false} onSubmit={handleOnSumbit}/>
        </ColumnContainer>
    )
}