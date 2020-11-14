import React, { createContext, useReducer, useContext } from "react";
import { v1 as uuid } from "uuid";
import { findColumnById, findIndexByColumnId, updateColumnCard } from "../utils/todoUtils";
import { Card, Column, TodoStatus } from "./types";

type Action =
    | {
        type: "ADD_COLUMN"
        payload: { title: string; }

    }
    | {
        type: "ADD_TASK"
        payload: { columnId: string; card: Card }
    }
    | {
        type: "EDIT_TASK"
        payload: {card: Card}
    }

export interface TodoState {
    lists: Column[]
}

interface TodoStateContextProps {
    state: TodoState
    dispatch: React.Dispatch<Action>
}

const TodoStateContext = createContext<TodoStateContextProps>(
    {} as TodoStateContextProps
)
const todoStateReducer = (state: TodoState, action: Action): TodoState => {
    switch (action.type) {
        case "ADD_COLUMN": {
            const column: Column = {
                _id: uuid(),
                sequence: state.lists.length,
                title: action.payload.title,
                created_date: new Date(),
                cards: []
            }
            console.log(column);
            return {
                ...state,
                lists: [...state.lists, column]
            }
        }
        case "ADD_TASK": {
            let lists = state.lists
            const column = findColumnById(lists, action.payload.card.column_id);
            column?.cards.push(action.payload.card);
            return {
                ...state,
                lists
            }
        }

        case "EDIT_TASK": {
            const lists = state.lists;
            const index = findIndexByColumnId(lists, action.payload.card.column_id)
            if (index) {
                let updatedColumn = updateColumnCard(lists[index], action.payload.card)
                if (updatedColumn) {
                    lists[index] = updatedColumn;
                }
            }
            return {
                ...state,
                lists
            }
        }

        default: {
            return state
        }
    }
}

const initialTodoState: TodoState = {
    lists: []
}


export const TodoStateAppProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(todoStateReducer, initialTodoState)

    return (
        <TodoStateContext.Provider value={{ state, dispatch: dispatch }}>
            {children}
        </TodoStateContext.Provider>
    )
}

export const useTodoAppState = () => {
    return useContext(TodoStateContext);
}
