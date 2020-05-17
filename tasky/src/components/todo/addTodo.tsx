import React, {useState} from "react";
import {FieldType, FormModal, IForm} from "../formModal/formModal";


function addTodoTask(fields: Map<string, any>) {
}


export const AddTodo: React.FC = () => {
    const [addTodo, setAddTodo] = useState(false);
    const AddTodoFields: IForm = {
        title: "Add Todo",
        isActive: addTodo,
        formFields: [
            {
                key: "title",
                label: "Title",
                type: FieldType.TEXT,
            },
            {
                key: "description",
                label: "Description",
                type: FieldType.TEXT,
            }
        ],
        onClose: () => setAddTodo(false),
        onSubmit: (fields: Map<string, any>) => addTodoTask(fields)
    }

    return (
        <div>
            <button onClick={() => setAddTodo(true)} style={{width: "100%"}}> Add Task </button>
            <FormModal
                title={AddTodoFields.title}
                formFields={AddTodoFields.formFields}
                isActive={AddTodoFields.isActive}
                onClose={AddTodoFields.onClose}
                onSubmit={AddTodoFields.onSubmit} />
        </div>
    )
}
