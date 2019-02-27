import React, {Component} from 'react';

import Axios from "../../General/AxiosData"
import Button from "@material-ui/core/es/Button/Button";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Css from "./ListStyle.css"
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Collapse, IconButton,
    Paper,
    Typography
} from "@material-ui/core";

import {ExpandMoreRounded} from "@material-ui/icons";
import CollpaseCard from "./CollpaseCard";


class List extends Component {

    constructor(props){
        super(props)
        this.loadAction=false;

    }




    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    renderNews=()=>{

       // return (
       //     <CollpaseCard newsData={this.state.newsData}>
       //     </CollpaseCard>
       // )

        const styles = theme => ({
            card: {
                maxWidth: 400,
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
            actions: {
                display: 'flex',
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            }
        });





        return this.state.newsData.map((items,index)=>{
            return (

                <CollpaseCard items={items} index={index}/>


            )
        })
    }


    state={
        newsData:[],
        start:this.props.start,
        amount:this.props.amount,
        end:this.props.start + this.props.amount,
        loadAction:false,
        expanded:false,
    }




//

    removeItems=()=>{
        this.setState({newsData:this.state.newsData.slice(0,-this.state.amount)})
        this.setState({end:this.state.end-this.state.amount})
        this.setState({loadAction:false})

    }



    addMore=()=>{
        // if(this.state.end<=this.state.amount) {
        // THIS COULD BE MODIFIED IN ORDER TO LOAD EVERY SINGLE RECORD
            this.setState({end:this.state.end+this.state.amount})

            Axios.get(`/articles?_start=${this.state.end}&_end=${this.state.end + this.state.amount}`)
                .then((response) => {
                    this.setState({newsData: [...this.state.newsData, ...response.data]})

                })

        // }
        this.setState({loadAction:true})

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
                <Button variant={"outlined"} size={"large"} color={"primary"} onClick={this.state.loadAction===false ? this.addMore : this.removeItems} >{!this.state.loadAction ? "Load more" : "Remove items"}</Button>
            </div>
        );
    }
}

export default List;