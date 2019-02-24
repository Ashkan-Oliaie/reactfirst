import React, {Component} from 'react';
import Posts from "../Elements/Posts";
import Videos from "../Elements/Videos";
import Slider from "../Widgets/Slider/Slider";

class HomePage extends Component {




    render() {

        return (
            <div className="w-100">
                <Slider type={"features"} start={"0"} end={"3"} />
                <Posts/>
                <Videos/>
            </div>
        );
    }
}

export default HomePage;