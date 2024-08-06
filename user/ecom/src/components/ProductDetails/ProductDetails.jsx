import React, { Component } from 'react';
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import 'react-toastify/dist/ReactToastify.css';
import cogoToast from 'cogo-toast';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      previewImg: "0",
      isSize: null,
      isColor: null,
      color: "",
      size: "",
      quantity: "",
      productId: null,
      addToCart: "Add To Cart",
      user: JSON.parse(localStorage.getItem('user')) || null
    };
    this.imgOnClick = this.imgOnClick.bind(this);
  }

 componentDidMount() {
  const { productDetails } = this.props.data;
  if (productDetails && productDetails.length > 0) {
    const { color, size, id } = productDetails[0];
    this.setState({
      isColor: color !== "na" ? "YES" : "NO",
      isSize: size !== "na" ? "YES" : "NO",
      productId: id,
    });
  }
}


  imgOnClick(event) {
    let imgSrc = event.target.getAttribute('src');
    this.setState({ previewImg: imgSrc });
  }

  addToCart = () => {
    const { isSize, isColor, color, size, quantity, productId, user } = this.state;

    if (!user || !user.email) {
      toast.warn('Please log in first', { position: 'top-right' });
      return;
    }

    const email = user.email;

    if (isColor === "YES" && color.length === 0) {
      toast.error('Please Select Color', { position: 'top-right' });
    } else if (isSize === "YES" && size.length === 0) {
      toast.error('Please Select Size', { position: 'top-right' });
    } else if (quantity.length === 0) {
      toast.error('Please Select Quantity', { position: 'top-right' });
    } else {
      this.setState({ addToCart: "Adding..." });
      let MyFormData = new FormData();
      MyFormData.append("color", color);
      MyFormData.append("size", size);
      MyFormData.append("quantity", quantity);
      MyFormData.append("id", productId);
      MyFormData.append("email", email);

      axios.post(AppURL.addToCart, MyFormData).then(response => {
        if (response.data === 1) {
          cogoToast.success("Product Added Successfully", { position: 'top-right' });
          this.setState({ addToCart: "Add To Cart" });
        } else {
          cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
          this.setState({ addToCart: "Add To Cart" });
        }
      }).catch(error => {
        cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
        this.setState({ addToCart: "Add To Cart" });
      });
    }
  }

  colorOnChange = (event) => {
    let color = event.target.value;
    this.setState({ color });
  }

  sizeOnChange = (event) => {
    let size = event.target.value;
    this.setState({ size });
  }

  quantityOnChange = (event) => {
    let quantity = event.target.value;
    this.setState({ quantity });
  }

  PriceOption(price, special_price) {
    if (special_price === "na") {
      return <p className="product-price-on-card"> Price : ${price} </p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">${price}</strike> ${special_price}
        </p>
      );
    }
  }

  render() {
    const { data } = this.props;

    if (!data || !data.productList || data.productList.length === 0 || !data.productDetails || data.productDetails.length === 0) {
      return <div>No product details available.</div>;
    }

    let title = data.productList[0].title;
    let brand = data.productList[0].brand;
    let category = data.productList[0].category;
    let subcategory = data.productList[0].subcategory;
    let price = data.productList[0].price;
    let product_id = data.productList[0].product_id;
    let special_price = data.productList[0].special_price;

    let image_one = data.productDetails[0].image_one || '';
    let image_two = data.productDetails[0].image_two || '';
    let image_three = data.productDetails[0].image_three || '';
    let image_four = data.productDetails[0].image_four || '';
    let color = data.productDetails[0].color || '';
    let size = data.productDetails[0].size || '';

    let short_description = data.productDetails[0].short_description || '';
    let long_description = data.productDetails[0].long_description || '';

    var ColorDiv = "d-none";
    var ColorOption = null;
    if (color !== "na") {
      let ColorArray = color.split(',');
      ColorOption = ColorArray.map((ColorList, i) => {
        return <option key={i} value={ColorList}> {ColorList} </option>;
      });
      ColorDiv = "";
    }

    var SizeDiv = "d-none";
    var SizeOption = null;
    if (size !== "na") {
      let SizeArray = size.split(',');
      SizeOption = SizeArray.map((SizeList, i) => {
        return <option key={i} value={SizeList}> {SizeList} </option>;
      });
      SizeDiv = "";
    }

    return (
      <Container fluid={true} className="BetweenTwoSection">
        <ToastContainer />
        <div className="breadbody">
          <Breadcrumb>
            <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
            <Breadcrumb.Item> <Link to={"/productcategory/" + category}> {category} </Link> </Breadcrumb.Item>
            <Breadcrumb.Item> <Link to={"/productsubcategory/" + category + "/" + subcategory}> {subcategory} </Link> </Breadcrumb.Item>
            <Breadcrumb.Item> <Link to={"/productdetails/" + product_id}> {title} </Link> </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row className="p-2">
          <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
            <Row>
              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                <div className="image-container">
                  <img id="previewImg" className="bigimage" src={this.state.previewImg === "0" ? image_one : this.state.previewImg} alt={title} />
                  <div className="thumbnail-container">
                    <img onClick={this.imgOnClick} className="smallimage product-sm-img" src={image_one} alt="image_one" />
                    <img onClick={this.imgOnClick} className="smallimage product-sm-img" src={image_two} alt="image_two" />
                    <img onClick={this.imgOnClick} className="smallimage product-sm-img" src={image_three} alt="image_three" />
                    <img onClick={this.imgOnClick} className="smallimage product-sm-img" src={image_four} alt="image_four" />
                  </div>
                </div>
              </Col>
              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                <h5 className="Product-Name">{title}</h5>
                <h6 className="section-sub-title">{short_description}</h6>
                {this.PriceOption(price, special_price)}
                <h6 className="mt-2">Category: <b>{category}</b></h6>
                <h6 className="mt-2">SubCategory: <b>{subcategory}</b></h6>
                <h6 className="mt-2">Brand: <b>{brand}</b></h6>
                <h6 className="mt-2">Product ID: <b>{product_id}</b></h6>
                <div className={ColorDiv}>
                  <h6 className="mt-2"> Choose Color </h6>
                  <select onChange={this.colorOnChange} className="form-control form-select">
                    <option>Choose Color</option>
                    {ColorOption}
                  </select>
                </div>
                <div className={SizeDiv}>
                  <h6 className="mt-2"> Choose Size </h6>
                  <select onChange={this.sizeOnChange} className="form-control form-select">
                    <option>Choose Size</option>
                    {SizeOption}
                  </select>
                </div>
                <div className="">
                  <h6 className="mt-2"> Choose Quantity </h6>
                  <select onChange={this.quantityOnChange} className="form-control form-select">
                    <option>Choose Quantity</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="input-group mt-3">
                  <button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  {this.state.addToCart} </button>
                  <Button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</Button>
                  <Button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">DETAILS</h6>
                <p>{long_description}</p>
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <h6 className="mt-2">REVIEWS</h6>
                {data.reviews && data.reviews.map((review, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <p className="p-0 m-0">
                      <span className="Review-Title">{review.name}</span>
                      <span className="text-success">
                        {Array(review.rating).fill().map((_, i) => <i key={i} className="fa fa-star"></i>)}
                      </span>
                    </p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetails;
