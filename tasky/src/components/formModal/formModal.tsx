import React, {useState} from "react";
import "./styles.css";

export enum FieldType {
    TEXT = "TEXT",
    SELECT = "SELECT"
}

export interface IOption {
    key: string;
    name: string;
    value: string;
}

export interface IFormField {
    key: string;
    label: string;
    type: FieldType;
    value?: any;
    options?: IOption[];

}

export interface IForm {
    title: string;
    formFields: IFormField[];
    isActive: boolean;
    onClose: () => void;
    onSubmit: (fields: any) => void;
}

function onChange(e: React.ChangeEvent<HTMLInputElement>, formData: any, setValue: any) {
    setValue({...formData, [e.target.name]: e.target.value});
}

function getInputElement(formField: IFormField, formValues: any, setValues: any) {
    switch (formField.type) {
        case FieldType.TEXT:
            return (
                <span className={"inputElements"}>
                    <label htmlFor={formField.key} className={"col-25"}> {formField.label} </label>
                    <input type="text" className={"col-75"} key={formField.key} name={formField.key} onChange={(e) => onChange(e, formValues, setValues)}/>
                </span>
            )

        case FieldType.SELECT:
            return (
                <span className={"inputElements"}>
                    <label htmlFor={formField.key} className={"col-25"}> {formField.label} </label>
                    <select key={formField.key} value={formField.value} className={"col-75"}>
                        {
                            formField.options?.map(option =>
                                <option key={option.name} value={option.value}> {option.name} </option>
                            )
                        }
                    </select>
                </span>
            )
        default:
            return <span/>
    }
}

function onSubmitClick(event: React.MouseEvent<HTMLButtonElement>, formValues: any, onSubmit: any): void {
    onSubmit(formValues);
    event.preventDefault();
}

export const FormModal: React.FC<IForm> = ({formFields, title, isActive, onSubmit, onClose}) => {
    const [formValues, setValues] = useState({});
    return (
        <div>
            {isActive ?
                <div className="modalContainer">
                    <div className="modalContent">
                        <header>
                            <span className="title"> {title} </span>
                            <span className="close-button" onClick={() => onClose()}>&times;</span>
                        </header>
                        <div className="formFields">
                            {
                                formFields.map(formField => getInputElement(formField, formValues, setValues))
                            }
                        </div>
                        <footer>
                            <button
                                type={"submit"}
                                key={"submit"}
                                onClick={(e) => {
                                    onSubmitClick(e, formValues, onSubmit)
                                    onClose()
                                }}>
                                Submit
                            </button>
                            <button
                                onClick={() => onClose()}
                                key={"close"}>
                                Close
                            </button>
                        </footer>
                    </div>
                </div> : null
            }
        </div>

    )
}
