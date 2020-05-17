import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export enum NotifyType {
    Info = "info",
    Warning = "warning",
    Error = "error",
    Success = "success"
}

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Notification: React.FC<{type: NotifyType, msg: string, open: boolean, onClose: any}> = ({type, msg, open, onClose}) => {
    setTimeout((val) => onClose(val), 3000)
    return (
        msg.length > 0 ?
            <Snackbar open={open} autoHideDuration={3000}>
                <Alert severity={type}> {msg} </Alert>
            </Snackbar>: null
    )
};
