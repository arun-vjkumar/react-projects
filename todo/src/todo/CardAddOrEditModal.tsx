import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import { Button, DescriptionBox, DescriptionTextArea, FormBox, FormBoxFooter, InputTitleText, TitleBox } from "../styles";
import { Card } from "./types";

interface CardAddOrEditModalProps {
    card?: Card;
    showEditModal: boolean;
    onClose: CallableFunction;
    isEdit: boolean;
    onSubmit(title: string, description: string): void
}

export const CardAddOrEditModal = ({ card, showEditModal, onClose, isEdit, onSubmit }: CardAddOrEditModalProps) => {
    const [title, settitle] = useState(card?.title);
    const [description, setdescription] = useState(card?.description);

    const handleOnChange = (event: any, setter: CallableFunction) => {
        event.preventDefault();
        setter(event.target.value);
    }

    const clearInputs = () => {
        settitle("");
        setdescription("");
    }

    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (description && title) {
            onSubmit(title, description);
            onClose();
            if (!isEdit) {
                clearInputs();
            }
        } else {
            alert("title/description can't be empty")
        }
    }

    const handleOnClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClose();
    }

    return (
        <React.Fragment>
            <Modal show={showEditModal} onClose={onClose} onSubmit={handleOnSubmit}>
                <FormBox>
                    <TitleBox>
                        <b>Title: &nbsp; &nbsp; <InputTitleText
                            type="text"
                            name={"cardTitle"}
                            value={title}
                            placeholder={"Column Title Ex: Done, Doing"}
                            onChange={(e) => handleOnChange(e, settitle)}
                        /></b>
                    </TitleBox>
                    <DescriptionBox>
                        <img src={"sort-button-with-three-lines.svg"} style={{ marginRight: "10px", marginLeft: "10px" }} width="20px" height="20px" />
                        <h3 style={{ display: "inline-block" }}> Description </h3>
                        <DescriptionTextArea
                            value={description}
                            onChange={(e) => handleOnChange(e, setdescription)}
                            placeholder="enter the task description"
                            name="taskDescription"
                            rows={10}
                            cols={30} />
                    </DescriptionBox>
                    <FormBoxFooter>
                        <Button primary={true} type="submit" onClick={handleOnSubmit}> Save </Button>
                        <Button primary={false} onClick={(e) => handleOnClose(e)}> Close </Button>
                    </FormBoxFooter>
                </FormBox>
            </Modal>
        </React.Fragment>
    )
}