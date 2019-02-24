import React, {Component} from 'react';
import Axios from "../../General/AxiosData";
import SliderTemp from "./SliderTemp";

class Slider extends Component {


    state={
        articles:[]
    }



    componentWillMount() {

        Axios.get(`/articles?_start=${this.props.start}&_end=${this.props.end}`)
            .then((response)=>{
                this.setState({articles:response.data})
            })


    }

    render() {
        console.log(this.state)
        return (
            <div>
                <SliderTemp type={this.props.type} articlesData={this.state.articles}/>
            </div>
        );
    }
}

export default Slider;