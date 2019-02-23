import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"

import Routes from "./General/Routes";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>

        );
    }
}

export default App;