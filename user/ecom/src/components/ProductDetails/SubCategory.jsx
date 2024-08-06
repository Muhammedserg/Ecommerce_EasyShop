import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SubCategory = ({ Category, SubCategory, ProductData }) => {
    const MyView = ProductData.map((ProductList, i) => {
        if (ProductList.special_price === "na") {
            return (
                <Col key={i} className="p-1" xl={3} lg={4} md={4} sm={6} xs={12}>
             <Link to={"/productdetails/"+ProductList.id} >

                    <Card className="image-box card w-100">
                        <div className="image-box">
                            <img className="center" src={ProductList.image} alt={ProductList.title} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card mt-auto">Price : ${ProductList.price}</p>
                        </Card.Body>
                    </Card>
                    </Link>         

                </Col>
            );
        } else {
            return (
                <Col key={i} className="p-1" xl={3} lg={4} md={4} sm={6} xs={12}>
                                          <Link to={"/productdetails/"+ProductList.id} >

                    <Card className="image-box card w-100">
                        <div className="image-box">
                            <img className="center" src={ProductList.image} alt={ProductList.title} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card mt-auto">
                                Price : <strike className="text-secondary">${ProductList.price}</strike> ${ProductList.special_price}
                            </p>
                        </Card.Body>
                    </Card>
                    </Link>         

                </Col>
            );
        }
    });

    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>{Category} / {SubCategory}</h2>
                </div>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </Fragment>
    );
};

export default SubCategory;
