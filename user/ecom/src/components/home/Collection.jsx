import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark('COLLECTION'))
      .then((response) => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>PRODUCT COLLECTION</h2>
          <p>Loading...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>PRODUCT COLLECTION</h2>
          <p>Failed to load products. Please try again later.</p>
        </div>
      </Container>
    );
  }

  const MyView = productData.map((collectionItem, i) => (
    <Col className="p-1" key={i} xl={3} lg={3} md={3} sm={6} xs={6}>
      <Link to={"/productdetails/" + collectionItem.id} className="text-link">
        <Card className="image-box card w-100">
          <div className="image-box">
            <img className="center" src={collectionItem.image} alt={collectionItem.title} />
          </div>
          <Card.Body className="d-flex flex-column">
            <p className="product-name-on-card">{collectionItem.title}</p>
            {collectionItem.special_price === 'na' ? (
              <p className="product-price-on-card mt-auto">Price : ${collectionItem.price}</p>
            ) : (
              <p className="product-price-on-card mt-auto">
                Price : <strike className="text-secondary">${collectionItem.price}</strike> ${collectionItem.special_price}
              </p>
            )}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>{MyView}</Row>
      </Container>
    </Fragment>
  );
}

export default Collection;
