// import React, {Component} from 'react';
// import {CSSTransition, TransitionGroup} from "react-transition-group";
//
//
// class ListTemp extends Component {
//
//
//
//     renderNews=()=>{
//        return this.props.newsData.map((items,index)=>{
//             return (
//                 <CSSTransition key={index} classNames={{enter:"itemEnter",enterActive:"itemEntered",enterDone:"itemEnterDone",exit:"itemExit",exitActive:"itemExiting" }} timeout={1000}>
//                         <div className={"listItem"}>
//                             <h4>{items.id}</h4>
//                             <div>{items.title}</div>
//                         </div>
//                 </CSSTransition>
//
//             )
//         })
//     }
//
//
//
//
//
//
//     render() {
//         return (
//             <TransitionGroup component={"div"}>
//                 {this.renderNews()}
//             </TransitionGroup>
//         );
//     }
// }
//
// export default ListTemp;


import React, {Component} from 'react';

import Axios from "../../General/AxiosData"
import Button from "@material-ui/core/es/Button/Button";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Css from "./ListStyle.css"


class List extends Component {

    constructor(props){
        super(props)
        this.loadAction=false;

    }

    renderNews=()=>{
        return this.state.newsData.map((items,index)=>{
            return (
                <CSSTransition key={index} classNames={{enter:"itemEnter",enterActive:"itemEntered",enterDone:"itemEnterDone",exit:"itemExit",exitActive:"itemExiting" }} timeout={4000}>
                    <div className={"listItem"}>
                        <h4>{items.id}</h4>
                        <div>{items.title}</div>
                    </div>
                </CSSTransition>

            )
        })
    }


    state={
        newsData:[],
        start:this.props.start,
        amount:this.props.amount,
        end:this.props.start + this.props.amount
    }



    renderButton=()=>{
        // this.loadAction= this.loadAction? false : true
        // console.log(this.loadAction)
        if(!this.loadAction){
            this.loadAction=true
            return  (<Button variant={"outlined"} color={"primary"} onClick={()=>{this.removeItems()}} >remove More</Button>)

        }

        if(this.loadAction){
            this.loadAction=false
            return (<Button variant={"outlined"} color={"primary"} onClick={()=>{this.addMore()}} >add Items</Button>)
        }


        // return this.loadAction? (<Button variant={"outlined"} color={"primary"} onClick={()=>{this.addMore()}} >add Items</Button>) : (<Button variant={"outlined"} color={"primary"} onClick={()=>{this.removeItems()}} >remove More</Button>)

    }

//

    removeItems=()=>{
        this.setState({end:this.state.end-this.state.amount})
        console.log(this.state.end)

        Axios.get(`/articles?_start=${this.state.start}&_end=${this.state.end-this.state.amount}`)
            .then((response) => {
                this.setState({newsData:response.data})
                console.log(this.state.newsData)


            })

        this.loadAction=false

    }



    addMore=()=>{
        if(this.state.end<=this.state.amount) {
            this.setState({end:this.state.end+this.state.amount})

            Axios.get(`/articles?_start=${this.state.end}&_end=${this.state.end + this.state.amount}`)
                .then((response) => {
                    this.setState({newsData: [...this.state.newsData, ...response.data]})

                })

        }
        this.loadAction=true

    }


    componentWillMount() {
        Axios.get(`/articles?_start=${this.state.start}&_end=${this.state.end}`)
            .then((response)=>{
                this.setState({
                    newsData:[...this.state.newsData,...response.data]
                })


            })

    }

    render() {
        return (
            <div>
                <TransitionGroup component={"div"}>
                    {this.renderNews()}
                </TransitionGroup>
                {/*<ListTemp  newsData={this.state.newsData}/>*/}
                {/*{this.renderButton()}*/}
                <Button variant={"outlined"} color={"primary"} onClick={this.loadAction===false ? this.addMore : this.removeItems} >{!this.loadAction ? "Load more" : "Remove items"}</Button>
            </div>
        );
    }
}

export default List;