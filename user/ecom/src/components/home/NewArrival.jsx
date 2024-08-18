import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { Link } from 'react-router-dom';

const NewArrival = () => {
    const [productData, setProductData] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        axios.get(AppURL.ProductListByRemark("NEW"))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('API Error:', error);
            });
    }, []);

    const next = () => {
        sliderRef.current.slickNext();
    }

    const previous = () => {
        sliderRef.current.slickPrev();
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const MyView = productData.map((product, i) => {
        if (product.special_price === "na") {
            return (
                <div key={i}>
                    <Link to={"/productdetails/" + product.id} className="text-link">
                        <Card className="image-box card">
                            <div className="image-box">
                                <img className="center" src={product.image} alt={product.title} />
                            </div>
                            <Card.Body> 
                                <p className="product-name-on-card">{product.title}</p>
                                <p className="product-price-on-card">Price : ${product.price}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            );
        } else {
            return (
                <div key={i}>
                    <Link to={"/productdetails/" + product.id} className="text-link">
                        <Card className="image-box card">
                            <div className="image-box">
                                <img className="center" src={product.image} alt={product.title} />
                            </div>
                            <Card.Body> 
                                <p className="product-name-on-card">{product.title}</p>
                                <p className="product-price-on-card">
                                    Price : <strike className="text-secondary">${product.price}</strike> ${product.special_price}
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            );
        } 
    });

    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>NEW ARRIVAL &nbsp;
                        <button className="btn btn-sm ml-2 site-btn" onClick={previous}>
                            <i className="fa fa-angle-left"></i>
                        </button>
                        &nbsp;
                        <button className="btn btn-sm ml-2 site-btn" onClick={next}>
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Slider ref={sliderRef} {...settings}>
                        {MyView}
                    </Slider>
                </Row>
            </Container>
        </Fragment>
    );
}

export default NewArrival;
