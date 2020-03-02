import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import forestImg from '../assets/black.jpg';
import forestImg2 from '../assets/black.jpg';

export default class CarouselBox extends Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>forest Img</h3>
                        <p>textetxttxtxtxtxtxtxt</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>forest Img</h3>
                        <p>textetxttxtxtxtxtxtxt</p>
                    </Carousel.Caption>
                </Carousel.Item>о да
            </Carousel>
        )
    }
}