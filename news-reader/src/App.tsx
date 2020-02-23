import React from 'react';
import {Route, Router} from "react-router-dom";
import {createHashHistory} from "history";
import './App.css';
import NewsPage from "./news/NewsPage";
import Nav from "./Nav";
import TopHeadLines from "./news/TopHeadLines";

class App extends React.Component<{}, {}> {
  render() {
    return (
        <div className="App">
            <Router history={createHashHistory()}>
                <header className="App-header">
                    <Nav />
                </header>

                <div className="container" style={{padding: 10}}>
                  <Route path="/news" component={NewsPage} />
                  <Route path="/" component={TopHeadLines} />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
