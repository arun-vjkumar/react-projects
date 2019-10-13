import React from "react";
import {Link} from "react-router-dom";

export default class Nav extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link
                        to={'/'}
                        style={{ textDecoration: 'none', color: 'white', fontSize:'100%' }}
                        className="nav-item"> News </Link>
                </div>
            </div>
        )
    }
}