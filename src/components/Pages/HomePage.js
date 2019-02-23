import React, {Component} from 'react';
import Slider from "../Elements/Slider";
import Posts from "../Elements/Posts";
import Videos from "../Elements/Videos";

class HomePage extends Component {




    render() {
        console.log(this.props)
        return (
            <div className="w-100">
                <Slider/>
                <Posts/>
                <Videos/>
            </div>
        );
    }
}

export default HomePage;