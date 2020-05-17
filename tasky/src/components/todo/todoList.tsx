import React from "react";
import {ITodoItem, TodoItem} from "./todoItem";
import "./styles.css";
import {AddTodo} from "./addTodo";

interface ITodoList {
    listTitle: string;
    todos: ITodoItem[];
}

export const TodoList: React.FC<ITodoList> = ({listTitle, todos}) => {
    return (
        <React.Fragment>
            <div className={"todoList"}>
                <span className={"todoListTitle"}> {listTitle} </span>
                {
                    todos.map(
                        (item, index) =>
                            <TodoItem
                                key={index} description={item.description}
                                status={item.status}
                                title={item.title}/>
                    )
                }
                <AddTodo />
            </div>
        </React.Fragment>
    )
}
