import React from "react"
import { ModalContainer, ModalMain } from "../styles"


interface ModalProps {
    show: boolean;
    onClose: CallableFunction;
    onSubmit: CallableFunction;
}


export const Modal = ({show, onClose, onSubmit, children }: React.PropsWithChildren<ModalProps>) => {
    return (
        <ModalContainer show={show}>
            <ModalMain>
                {children}
            </ModalMain>
        </ModalContainer>
    )
}