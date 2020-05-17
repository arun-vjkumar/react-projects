import React, {useEffect, useState} from 'react';
import './App.css';
import {clearToken, isValidToken, Login} from "./components/auth";
import {
    BrowserRouter as Router, Redirect, Switch, Route
} from "react-router-dom";
import {TodoBoard} from "./components/todo/todoBoard";
import {FieldType, FormModal, IFormField} from "./components/formModal/formModal";

function hasLoggedIn(): boolean {
    // clearToken();
    const token: string | null = localStorage.getItem("taskyToken")
    if (token) {
        if (isValidToken(token))
            return true;
    }
    return false;
}

function getLoggedInUserName(): string {
    const token: string | null = localStorage.getItem("taskyToken")
    if (token) {
        const decodedObj = isValidToken(token);
        if (decodedObj) {
            return Object.values(decodedObj)[0];
        }
    }
    return "";
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(hasLoggedIn());
    useEffect(() => {
        if (isLoggedIn) {
            console.log("Logged In Successfully");
        }
    }, [isLoggedIn])

    const AppContext = React.createContext({
        authenticated: false,
        userName: ""
    })
    return (
        <AppContext.Provider value={{authenticated: isLoggedIn, userName: getLoggedInUserName()}}>
        <div className="App">
            <Router>
                {!isLoggedIn && <Redirect to={{pathname: '/login'}} from={"*"}/>}
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        {!isLoggedIn ?
                            <Login onSuccessfulLogin={setIsLoggedIn} />
                            : <Redirect to={{pathname: '/home'}} from={"*"}/>}
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
        </AppContext.Provider>
    );
}

const formFields: IFormField[] = [
    {
        key: "name",
        label: "Name",
        type: FieldType.TEXT,
        value: ""
    },
    {
        key: "name1",
        label: "Name",
        type: FieldType.TEXT,
        value: ""
    },
    {
        key: "name1",
        label: "Name",
        type: FieldType.TEXT,
        value: ""
    },
    {
        key: "tech",
        label: "Course",
        type: FieldType.SELECT,
        value: "",
        options: [
            {
                key: "BE",
                name: "Bachelor of Engineering",
                value: "BE"
            },
            {
                key: "BA",
                name: "Bachelor of Arts",
                value: "BA"
            }
        ]
    }
]

function Home() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <h2>{`Welcome ${getLoggedInUserName()} Dashboard`}</h2>
            <TodoBoard />
            <button onClick={() => setIsActive(true)} > Activate </button>
            <FormModal
                formFields={formFields}
                title={"test"}
                isActive={isActive}
                onClose={() => setIsActive(false)}
                onSubmit={() => console.log()}/>
        </div>
    );
}

function PageNotFound() {
    return (
        <div>
            <h2>404 Page Not Found</h2>
        </div>
    );
}

export default App;
