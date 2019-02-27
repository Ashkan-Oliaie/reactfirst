import React, {Component} from 'react';
import Posts from "../Elements/Posts";
import Videos from "../Elements/Videos";
import Slider from "../Widgets/Slider/Slider";
import List from "../Widgets/ItemList/List";

class HomePage extends Component {




    render() {

        return (
            <div className="w-100">
                <Slider type={"features"} start={"0"} end={"3"} />
                <List start={0} amount={3}/>
                <Videos/>
            </div>
        );
    }
}

export default HomePage;