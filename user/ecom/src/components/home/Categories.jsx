import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios.get(AppURL.AllCategoryDetails)
      .then(response => {
        setMenuData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const MyView = menuData.map((category, i) => {
    return (
      <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
        <Link to={"/productcategory/" + category.category_name} className="text-link">
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img className="center" src={category.category_image} alt={category.category_name} />
              <h5 className="category-name">{category.category_name}</h5>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          {MyView}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Categories;
