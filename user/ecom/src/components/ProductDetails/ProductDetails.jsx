import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import 'react-toastify/dist/ReactToastify.css';
import cogoToast from 'cogo-toast';

const ProductDetails = ({ data }) => {
  const [previewImg, setPreviewImg] = useState("0");
  const [isSize, setIsSize] = useState(null);
  const [isColor, setIsColor] = useState(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productId, setProductId] = useState(null);
  const [addToCartText, setAddToCartText] = useState("Add To Cart");
  const [addToFavText, setAddToFavText] = useState("Favourite");
  const user = JSON.parse(localStorage.getItem('user')) || null;

  useEffect(() => {
    const { productDetails } = data;
    if (productDetails && productDetails.length > 0) {
      const { color, size, id } = productDetails[0];
      setIsColor(color !== "na" ? "YES" : "NO");
      setIsSize(size !== "na" ? "YES" : "NO");
      setProductId(id);
    }
  }, [data]);

  const imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute('src');
    setPreviewImg(imgSrc);
  }

  const addToCart = () => {
    if (!user || !user.email) {
      toast.warn('Please log in first', { position: 'top-right' });
      return;
    }

    if (isColor === "YES" && color.length === 0) {
      toast.error('Please Select Color', { position: 'top-right' });
    } else if (isSize === "YES" && size.length === 0) {
      toast.error('Please Select Size', { position: 'top-right' });
    } else if (quantity.length === 0) {
      toast.error('Please Select Quantity', { position: 'top-right' });
    } else {
      setAddToCartText("Adding...");
      let MyFormData = new FormData();
      MyFormData.append("color", color);
      MyFormData.append("size", size);
      MyFormData.append("quantity", quantity);
      MyFormData.append("id", productId);
      MyFormData.append("email", user.email);

      axios.post(AppURL.addToCart, MyFormData).then(response => {
        if (response.data === 1) {
          cogoToast.success("Product Added Successfully", { position: 'top-right' });
          setAddToCartText("Add To Cart");
        } else {
          cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
          setAddToCartText("Add To Cart");
        }
      }).catch(error => {
        cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
        setAddToCartText("Add To Cart");
      });
    }
  }

  const addToFavourite = () => {
    if (!user || !user.email) {
      toast.warn('Please log in first', { position: 'top-right' });
      return;
    }

    axios.post(AppURL.addToFavourite, {
      product_code: productId,
      email: user.email
    }).then(response => {
      if (response.data.status === 'Product added to favourites') {
        cogoToast.success("Product Added to Favourites", { position: 'top-right' });
        setAddToFavText("Added to Favourites");
      } else {
        cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
      }
    }).catch(error => {
      cogoToast.error("Your Request is not done! Try Again", { position: 'top-right' });
    });
  }

  const PriceOption = (price, special_price) => {
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
  let colorOptions = data.productDetails[0].color || '';
  let sizeOptions = data.productDetails[0].size || '';

  let short_description = data.productDetails[0].short_description || '';
  let long_description = data.productDetails[0].long_description || '';

  var ColorDiv = "d-none";
  var ColorOption = null;
  if (colorOptions !== "na") {
    let ColorArray = colorOptions.split(',');
    ColorOption = ColorArray.map((ColorList, i) => {
      return <option key={i} value={ColorList}> {ColorList} </option>;
    });
    ColorDiv = "";
  }

  var SizeDiv = "d-none";
  var SizeOption = null;
  if (sizeOptions !== "na") {
    let SizeArray = sizeOptions.split(',');
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
                <img id="previewImg" className="bigimage" src={previewImg === "0" ? image_one : previewImg} alt={title} />
                <div className="thumbnail-container">
                  <img onClick={imgOnClick} className="smallimage product-sm-img" src={image_one} alt="image_one" />
                  <img onClick={imgOnClick} className="smallimage product-sm-img" src={image_two} alt="image_two" />
                  <img onClick={imgOnClick} className="smallimage product-sm-img" src={image_three} alt="image_three" />
                  <img onClick={imgOnClick} className="smallimage product-sm-img" src={image_four} alt="image_four" />
                </div>
              </div>
            </Col>
            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
              <h5 className="Product-Name">{title}</h5>
              <h6 className="section-sub-title">{short_description}</h6>
              {PriceOption(price, special_price)}
              <h6 className="mt-2">Category: <b>{category}</b></h6>
              <h6 className="mt-2">SubCategory: <b>{subcategory}</b></h6>
              <h6 className="mt-2">Brand: <b>{brand}</b></h6>
              <h6 className="mt-2">Product ID: <b>{product_id}</b></h6>
              <div className={ColorDiv}>
                <h6 className="mt-2"> Choose Color </h6>
                <select onChange={(e) => setColor(e.target.value)} className="form-control form-select">
                  <option>Choose Color</option>
                  {ColorOption}
                </select>
              </div>
              <div className={SizeDiv}>
                <h6 className="mt-2"> Choose Size </h6>
                <select onChange={(e) => setSize(e.target.value)} className="form-control form-select">
                  <option>Choose Size</option>
                  {SizeOption}
                </select>
              </div>
              <div className="">
                <h6 className="mt-2"> Choose Quantity </h6>
                <select onChange={(e) => setQuantity(e.target.value)} className="form-control form-select">
                  <option>Choose Quantity</option>
                  {[...Array(10).keys()].map((n) => (
                    <option key={n} value={n + 1}>
                      {n + 1 < 10 ? `0${n + 1}` : n + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group mt-3">
                <button onClick={addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  {addToCartText} </button>
                <Button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</Button>
                <Button onClick={addToFavourite} className="btn btn-primary m-1"> <i className="fa fa-heart"></i> {addToFavText} </Button>
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

export default ProductDetails;
