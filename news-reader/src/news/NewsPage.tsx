import * as React from "react";
import {store} from "../index";
import {NewsHeadlines} from "./types";
import {IAppState} from "../store/store";
import {connect} from "react-redux";
import {getNewsHeadlines} from "./actions";
import 'react-tippy/dist/tippy.css'
import { Tooltip } from "react-tippy";
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'


const HeadLinesColumns = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Description',
        accessor: 'description',
        Cell: (p: any) => <Tooltip title={p.value} position="right" interactive={true} > {p.value} </Tooltip>
    },
    {
        Header: 'Category',
        accessor: 'category',
    },
    {
        Header: 'Country',
        accessor: 'country',
    },
    {
        Header: 'Link',
        accessor: 'url',
        Cell: (p: any) => <a href={`${p.value}`} target={'_blank'}>{p.value}</a>,
        width: 100
    }
];

interface IConnectProps {
    newsHeadlines: NewsHeadlines[]
}


class NewsPage extends React.Component<IConnectProps, {}>{
    componentDidMount(): void {
        store.dispatch(getNewsHeadlines());
    }

    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.newsHeadlines}
                    columns={HeadLinesColumns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    style={{width: "80%",  marginLeft: "10%",  marginRight:"10%"}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState): IConnectProps => {
    return {
        newsHeadlines: state.news.headlines
    }
};

export default connect(mapStateToProps)(NewsPage);
