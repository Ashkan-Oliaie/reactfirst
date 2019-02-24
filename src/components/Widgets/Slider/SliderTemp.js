import React, {Component} from 'react';

import Slick from "react-slick"
import {Link} from "react-router-dom";

// import asd from "../../../images/articles/1.jpeg"


import css from "./Slider.css"

class SliderTemp extends Component {

    sliderSetting={
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...this.props.settings
    }

    renderSlider=()=>{
        switch(this.props.type){

            case "features":
               return this.props.articlesData.map((article,index)=>{
                       return (
                           <div key={index}>
                               <div className={"featureItem"}>

                                   <div className={"featureImage"}
                                   style={{background:`url(../images/articles/${article.image})`}}
                                   >g</div>

                                   {/*<img className={"featureImage"} src={`../images/articles/${article.image}`}/>*/}

                                   <Link to={`/articles/${article.id}`}>

                                       <div className={"featureCaption"}>
                                           {article.title}
                                       </div>
                                   </Link>

                               </div>
                           </div>
                       )
                   }
            );

            default: return null
        }

    }


    render() {

        // console.log(this.renderSlider())
        return (
            <Slick {...this.sliderSetting}>
               { this.renderSlider()}
            </Slick>
        );
    }
}

export default SliderTemp;