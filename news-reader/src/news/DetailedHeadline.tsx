import React from "react";
import {TopHeadlines} from "./types";

interface IProps {
    headline: TopHeadlines;
    setSelectedHeadline: (headline: TopHeadlines) => void;
}

export class DetailedHeadlineModal extends React.Component<IProps>{
    render () {
        return (
            <div>
                <h1> {this.props.headline.title} </h1>
                <img src={this.props.headline.urlToImage} height={500} width={500} placeholder={"loading..."}/>
                <h3> {this.props.headline.description} </h3>
            </div>
        )
    }
}
