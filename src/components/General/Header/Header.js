import React, {Component} from 'react';

import Css from "./Header.css"
import MaterialSideBar from "../SideBar/MaterialSideBar";
import {AppBar, Toolbar} from "@material-ui/core";

class Header extends Component {




    Logo=()=>{
        return <div className={"HeaderItem"}>
            <img src="#" alt="Logo"/>
        </div>
    }



    render() {
        return (
                <AppBar color={""} style={{backgroundColor:"#b27cff"}}>

                    <Toolbar className="justify-content-between">

                       <div className={"d-flex"}>
                           <MaterialSideBar />
                           {this.Logo()}
                       </div>

                        <div>Menu</div>

                    </Toolbar>

                </AppBar>
        );
    }
}

export default Header;