import React from "react";
import {ITodoItem} from "./todoItem";
import {TodoStatus} from "../../models/store";
import {TodoList} from "./todoList";
import "./styles.css";

export class TodoBoard extends React.Component<any, any> {
    private sample: ITodoItem[] = [
        {
            title: "read",
            description: "learn to focus",
            status: TodoStatus.IN_PROGRESS
        },
        {
            title: "read",
            description: "learn to focus",
            status: TodoStatus.IN_PROGRESS
        }
    ]


    render() {
        return (
            <React.Fragment>
                <div className={"todoBoard"}>
                    <TodoList listTitle={"Learning Skills"} todos={this.sample}/>
                    <TodoList listTitle={"Learning Skills"} todos={this.sample}/>
                </div>
            </React.Fragment>
        )
    }
}
