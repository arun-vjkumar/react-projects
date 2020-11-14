import styled from "styled-components";

export const AppContainer = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    width: 100%;
`

export const BoardContainer = styled.div`
    align-items: flex-start;
    background-color: #3179ba;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    padding: 20px;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
  }
`

export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-height: 100px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
    @media (max-width: 768px) {
        width: 300px;
        margin: 20px 0px;
  }
`


export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #fff;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`

export const CardDisplay = styled.div`
    cursor: pointer;
`

interface ModalContainerProps {
    show?: boolean
  }

export const ModalContainer = styled.div<ModalContainerProps>`
    position: fixed;
    top: 10px;
    width: 80%;
    height: 80%;
    display: ${props => (props.show ? "flex": "none")};
`

export const ModalMain = styled.section`
    background: #fff;
    border-radius: 10px;
    box-shadow: #091e4240 0px 1px 0px 0px;
    position:fixed;
    width: 50%;
    min-height: 50%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    @media (max-width: 768px) {
        width: 70%;
    }
`

export const FormBox = styled.form`
    width: 100%;
    height: 100%;
`

export const DescriptionBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 5px;
`


export const TitleBox = styled.div`
    width: 100%;
    height: 50%;
    padding: 20px;
    margin: 15px 10px 0px 10px;
`

export const DescriptionTextArea = styled.textarea`
    margin: 5px;
    margin-top: 0px;
    width: 90%;
    font-size: 1.5em;
    padding: 20px;
    border-radius: 5px;
    ::placeholder {
        color: blue;
        font-size: 1.5em;
        opacity: 20%;
        text-align: center;
}
`

export const FormBoxFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
`

interface ButtonProps {
    primary: boolean;
  }

export const Button = styled.button<ButtonProps> `
    background: ${props => props.primary ?  "#092981": "#5d8b88"};
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: 200px;
    align-items: center;
    @media (max-width: 768px) {
        width: 100px;
    }
`

interface addItemButtonProps {
    dark?: boolean;
}

export const AddItemButton = styled.button<addItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${props => (props.dark ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    }
`

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`

export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`

export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    padding: 6px 12px;
    width: 300px;
`

export const NewInputTextButton = styled.div`
    max-width: 300px;
    border: 1px;
`

export const InputTitleText = styled.input`
width: 300px;
height: 50px;
border-radius: 10px;
::placeholder {
    color: blue;
    font-size: 1.5em;
    opacity: 20%;
    text-align: center;
`

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const ProfileContainer = styled.div`
    width: 50%;
    height: 80%;
    border: 2px;
    border-color: black;
    justify-content: center;
`

export const ProfileTitle = styled.div`
    font-size: 1.5em;
    text-align: center;
    font-family: "cursive";
`

export const NameAndImageContainer = styled.div`
    width:100%;
`

export const NameDesignationTitle = styled.div`
    font-size: 1.5em;
    margin-top: 50px;
    margin-left: 75px;
    float: left;
    font-family: "cursive";
`

export const ImageContainer = styled.img`
align-self: center;
width: 200px;
height: 200px;
float: right;
border-radius: 10%;
`

export const DescriptionContainer = styled.div`
float: center;
font-family: "cursive";
font-size: 24px;
margin: 40px;
padding: 40px;
`

export const ThankyouContainer = styled.div`
float: center;
font-family: "cursive";
font-size: 24px;
margin: 40px;
padding: 40px;
text-align: center;
`