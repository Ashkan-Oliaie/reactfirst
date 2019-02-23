import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import css from "./Layout.css"

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="layoutBody">{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default Layout;