import React, {Component} from 'react';
import MaterialSideBar from "./SideBar/MaterialSideBar";
import {Route, Switch} from "react-router-dom";
import SecondPage from "../Pages/SecondPage";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Layout from "./Layout/Layout";

class Routes extends Component {

    render() {

        return (
            <Layout>

                {/*There is a Header here*/}

                    <Switch>
                        <Route path={"/SecondPage"} component={SecondPage}/>
                        <Route path={"/home"} exact component={HomePage}/>
                        <Route component={ErrorPage}/>
                    </Switch>

                {/*There is a Footer here*/}

            </Layout>

        );
    }
}

export default Routes;