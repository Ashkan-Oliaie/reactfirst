import React, {Component} from 'react';
import {Button, SwipeableDrawer} from "@material-ui/core";
import Link from "react-router-dom/es/Link";
import Css from "./SideBar.css"

import Dehaze from "@material-ui/icons/Dehaze"
import {NavLink} from "react-router-dom";
import SideNavItems from "./SideNavItems";

class MaterialSideBar extends Component {


    state = {
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {



        return (
            <div className=" align-self-center" >
                <Button variant={"outlined"} color={"primary"} onClick={this.toggleDrawer('left', true)}><Dehaze/></Button>
                {/*<Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>*/}
                {/*<Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>*/}
                {/*<Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>*/}
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >

                    <div
                        className="d-flex flex-column SideBar"
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >

                        <SideNavItems/>
                        {/*<NavLink activeClassName={"activated"} className="p-3"  to={"/home"}>HomePage</NavLink>*/}

                        {/*<NavLink activeClassName={"activated"} className="p-3" to={"/SecondPage"}>SecondPage</NavLink>*/}

                    </div>
                </SwipeableDrawer>

                {/*<SwipeableDrawer*/}
                    {/*anchor="top"*/}
                    {/*open={this.state.top}*/}
                    {/*onClose={this.toggleDrawer('top', false)}*/}
                    {/*onOpen={this.toggleDrawer('top', true)}*/}
                {/*>*/}
                    {/*<div*/}
                        {/*tabIndex={0}*/}
                        {/*role="button"*/}
                        {/*onClick={this.toggleDrawer('top', false)}*/}
                        {/*onKeyDown={this.toggleDrawer('top', false)}*/}
                    {/*>*/}

                    {/*</div>*/}
                {/*</SwipeableDrawer>*/}
                {/*<SwipeableDrawer*/}
                    {/*anchor="bottom"*/}
                    {/*open={this.state.bottom}*/}
                    {/*onClose={this.toggleDrawer('bottom', false)}*/}
                    {/*onOpen={this.toggleDrawer('bottom', true)}*/}
                {/*>*/}
                    {/*<div*/}
                        {/*tabIndex={0}*/}
                        {/*role="button"*/}
                        {/*onClick={this.toggleDrawer('bottom', false)}*/}
                        {/*onKeyDown={this.toggleDrawer('bottom', false)}*/}
                    {/*>*/}
                    {/*</div>*/}
                {/*</SwipeableDrawer>*/}
                {/*<SwipeableDrawer*/}
                    {/*anchor="right"*/}
                    {/*open={this.state.right}*/}
                    {/*onClose={this.toggleDrawer('right', false)}*/}
                    {/*onOpen={this.toggleDrawer('right', true)}*/}
                {/*>*/}
                    {/*<div*/}
                        {/*tabIndex={0}*/}
                        {/*role="button"*/}
                        {/*onClick={this.toggleDrawer('right', false)}*/}
                        {/*onKeyDown={this.toggleDrawer('right', false)}*/}
                    {/*>*/}
                    {/*</div>*/}
                {/*</SwipeableDrawer>*/}

            </div>
        );
    }
}

export default MaterialSideBar;