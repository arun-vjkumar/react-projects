import React, { useState } from "react"
import { CardContainer, CardDisplay } from "../styles"
import { CardAddOrEditModal } from "./CardAddOrEditModal";
import { useTodoAppState } from "./TodoStateContainer";
import { Card } from "./types"

interface CardProps {
    card: Card;
}

export const TodoCard = ({ card }: CardProps) => {
    const {state, dispatch}  = useTodoAppState();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => { setShowModal(false) }

    const handleOnSUbmit = (title: string, description: string) => {
        card.title = title;
        card.description = description;
        dispatch({ type: "EDIT_TASK", payload: {card}})
    }
    return (
        <React.Fragment>
            <CardContainer>
                <CardAddOrEditModal card={card} onClose={handleClose} showEditModal={showModal} isEdit={true} onSubmit={handleOnSUbmit}/>
                <CardDisplay onClick={() => setShowModal(true)}>
                    <span>{card.title}</span>
                </CardDisplay>
            </CardContainer>
        </React.Fragment>
    )
}