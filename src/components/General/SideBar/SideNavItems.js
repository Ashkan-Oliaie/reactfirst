import React,{Component,Fragment} from 'react';
import {NavLink} from "react-router-dom";

class SideNavItems extends Component {


    componentWillMount() {

        this.items=[

            {
                classNames:"SideBarItem",
                icon:"icon",
                title:"Home",
                path:"/home"
            },
            {
                classNames:"SideBarItem",
                icon:"icon",
                title:"SecondPage",
                path:"/SecondPage"
            },

        ]

    }


    renderItems=()=>
        this.items.map((item)=>{
            return (
                <NavLink
                    activeClassName={"activated"}
                    className={`p-3 SideBarItem`}
                    to={item.path}
                >
                    {item.title}
                </NavLink>
            )
        })





    render() {


        return (

            <Fragment>
                {this.renderItems()}
            </Fragment>
        );
    }
}

export default SideNavItems;