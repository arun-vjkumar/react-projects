import React from "react";
import {TopHeadlines} from "./types";
import {HeadlineModal} from "./HeadlineModal";
import {IAppState} from "../store/store";
import {connect} from "react-redux";
import {store} from "../index";
import {getTopHeadlines} from "./actions";
import './styles.css'
import {DetailedHeadlineModal} from "./DetailedHeadline";

interface IConnectProps {
    topHeadlines: TopHeadlines[];
}

interface IState {
    selectedHeadLine: TopHeadlines;
}

class TopHeadLines extends React.Component<IConnectProps, IState>{
    componentDidMount(): void {
        store.dispatch(getTopHeadlines());
    }

    constructor(props: IConnectProps) {
        super(props);
        this.state = {
            selectedHeadLine: null
        };
        this.setSelectedHeadline = this.setSelectedHeadline.bind(this);
    }

    public setSelectedHeadline(selectedHeadLine: TopHeadlines) {
        this.setState({selectedHeadLine});
    }

    render() {
        return (
            <div>
                <div className="split left">
                    {this.props.topHeadlines.map((value, index, array) =>
                       <HeadlineModal headline={value} setSelectedHeadline={this.setSelectedHeadline}/>
                    )}
                </div>
                <div className="split right">
                    {this.state.selectedHeadLine ?
                        <DetailedHeadlineModal headline={this.state.selectedHeadLine} setSelectedHeadline={this.setSelectedHeadline}/>: ""
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: IAppState): IConnectProps => {
    return {
        topHeadlines: state.news.topHeadLines
    }
};

export default connect(mapStateToProps)(TopHeadLines);
