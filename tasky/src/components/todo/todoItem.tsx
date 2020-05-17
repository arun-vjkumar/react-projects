import React from "react";
import styled from "styled-components";
import {TodoStatus} from "../../models/store";

const Item = styled.div`
width: 300px;
height: 200px;
display: flex;
margin: 10px;
background: white;
flex-direction: column;
align-items: center;
justify-content: center;
draggable: true;
border-radius: 10px;
outline: none;
box-shadow: 0px 0px 28px 14px rgba(0,0,0,0.18);
-webkit-box-shadow: 0px 0px 28px 14px rgba(0,0,0,0.18);
-moz-box-shadow: 0px 0px 28px 14px rgba(0,0,0,0.18);
`

const Title = styled.div`
width: 100px;
font-size: 20px
`

export interface ITodoItem {
    title: string;
    description: string;
    status: TodoStatus;
}

export const TodoItem: React.FC<ITodoItem> = ({title, description, status}) => {
    return (
        <React.Fragment>
            <Item>
                <Title> {title} </Title>
                <p>{description}</p> <br />
                {status} <br />
            </Item>
        </React.Fragment>
    )
}
