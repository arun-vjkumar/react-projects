import React from "react";
import {TopHeadlines} from "./types";
import './styles.css';

interface IProps {
    headline: TopHeadlines;
    setSelectedHeadline: (headline: TopHeadlines) => void;
}


export class HeadlineModal extends React.Component<IProps, {}>{
    render() {
        return (
            <div className='transbox' onClick={() => this.props.setSelectedHeadline(this.props.headline)}>
                <h3> <b> Title: </b> <i> {this.props.headline.title} </i> </h3>
                <h3> <b> Source: </b> {this.props.headline.source.name} <br /> <b> Published At: </b> {this.props.headline.publishedAt} </h3>
            </div>
        )
    }
}
