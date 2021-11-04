import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner1.jpg';
import banner2 from '../../Images/banner2.jpg';
import banner3 from '../../Images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="banner-caption_1">Beautiful tea garden in Sylhet .</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="banner-caption_2">St. Martin's Island in Cox Bazar .</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="banner-caption_3">Royal Bangle Tiger in Sundarban .</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;