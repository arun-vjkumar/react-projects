import React, { useState } from "react"
import { AddItemButton, NewInputTextButton, NewItemInput } from "../styles"

interface AddNewColumnFormProps {
    handleAddNewColumn(title: string): void
}

export const AddNewColumn = ({handleAddNewColumn}: AddNewColumnFormProps) => {
    const [title, setTitle] = useState("")

    const handleOnChange = (event: any) => {
        setTitle(event.target.value)
    }

    const handleOnSaveNewColumn = () => {
        if (!title || title.length == 0) {
            alert("Title can't be empty")
        } else {
            handleAddNewColumn(title);
            setTitle("");
        }
    }

    return (
        <React.Fragment>
            <NewInputTextButton>
                <NewItemInput onChange={handleOnChange} value={title} placeholder="Title Ex: Done, Doing"/>
                <AddItemButton dark={false} onClick={() => handleOnSaveNewColumn()}>
                    + Add New Column
                </AddItemButton>
            </NewInputTextButton>
        </React.Fragment>
    )
}