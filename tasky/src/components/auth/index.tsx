import React, {useEffect, useState} from "react";
import {AppDatabase} from "../../models/store";
import * as jwt from "jsonwebtoken";
import "./styles.css"

export function isValidToken(token: string): string | object {
    try {
        return jwt.verify(token, "tasky");
    } catch (e) {
        return "";
    }
}

function generateAndStoreToken(userName: string) {
    try {
        jwt.sign({userName: userName},
            "tasky",
            {expiresIn: '1h'},
            function (err, token) {
                localStorage.setItem("taskyToken", token ? token : "");
            });
        console.log("Successfully generated token");
    } catch (e) {
        console.log(e);
    }
}

export function clearToken() {
    localStorage.clear();
}

function handleSignUp(uName: string, password: string): string {
    if (uName.length > 3 && password.length > 3) {
        const db = AppDatabase.getRepo()
        db.getUser(uName).then(user => {
            if (user === undefined || user === null) {
                db.addUser({uName: uName, pwd: password})
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                return "successful";
            } else {
                return "user name already exist";
            }
        })
    }
    return "failed to signup";
}

function handleLogin(uName: string, password: string, onSuccess: any): string {
    const db = AppDatabase.getRepo()
    db.getUser(uName).then(user => {
        if (user === undefined || user === null) {
            return "user doesn't exist";
        } else {
            if (user.uName === uName && user.pwd === password) {
                generateAndStoreToken(uName);
                onSuccess(true);
                return "successful";
            }
        }
    })
    return "failed to login";
}

export const Login: React.FC<{ onSuccessfulLogin: any }> = ({onSuccessfulLogin}) => {
    const [status, setStatusBase] = useState("");
    const [uName, setUName] = useState("");
    const [password, setPwd] = useState("");

    const [isSignUp, setSignUp] = useState(false);
    useEffect(() => {
        if (isSignUp) {
            let status = handleSignUp(uName, password);
            if (status === "successful") {
                setStatusBase("SignUp Successful")
            } else {
                setStatusBase(`SignUp UnSuccessful Error: ${status}`)
            }
            setUName("");
            setPwd("");
        }
        setSignUp(false);
    }, [isSignUp])

    const [isLogin, setLogin] = useState(false)
    useEffect(() => {
        if (isLogin) {
            if (handleLogin(uName, password, onSuccessfulLogin) === "successful") {
                setStatusBase("login Successful");
                onSuccessfulLogin(true);
            } else {
                setStatusBase("login UnSuccessful");
            }
            setUName("");
            setPwd("");
            setLogin(false);
        }
    }, [isLogin])

    return (
        <div className={"page"}>
            <div className={"login"}>
                <div className={"loginField"}> User Name <br/>
                    <input type={"textBox"} name={"userName"} value={uName}
                           onChange={event => setUName(event.currentTarget.value)}/>
                    <br/>
                </div>
                <div className={"loginField"}> Password <br/>
                    <input type={"password"} name={"password"} value={password}
                           onChange={event => setPwd(event.currentTarget.value)}/><br/>
                </div>
                <div className={"loginField"}>
                    <button onClick={() => setLogin(true)}> Login</button>
                    <button onClick={() => setSignUp(true)}> SignUp</button>
                </div>
            </div>
            <div>
                {/*{status && <Notification type={NotifyType.Error} msg={status} open={status.length > 0} onClose={() => setStatusBase("")}/> }*/}
            </div>
        </div>
    )
}
