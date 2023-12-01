import React, { Component, useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    IncreaseCount = () => {
        this.setState((prevState) => {
          if (prevState.count < 2) return { count: prevState.count + 1 };
          else {
            return { count: 0 };
          }
        });
      }

    DecreaseCount = () => {
            this.setState(prevState => {
                if (prevState.count == 0) return {count: 2}
                else return {count: prevState.count - 1}
            })
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.DecreaseCount}>
                    <ArrowBackIosIcon className="icon"/>
                </button>
                <img src={images[this.state.count].img} alt="" />
                <button onClick={this.IncreaseCount}>
                    <ArrowForwardIosIcon className="icon"/>
                </button>
                <div className="details">
                    <p className="title">{images[this.state.count].title}</p>
                    <p className="subtitle">{images[this.state.count].subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Carousel;