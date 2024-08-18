import React, { useState, useEffect, Fragment } from 'react';
import AppURL from '../api/AppURL';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Category from '../components/ProductDetails/Category';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductCategoryPage = () => {
    const { category } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(`Fetching data for category: ${category}`);
        axios.get(AppURL.ProductListByCategory(category))
            .then(response => {
                console.log('Data fetched:', response.data);
                setProductData(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [category]);

    console.log('Rendering ProductCategoryPage with data:', productData);

    return (
        <Fragment>
            <NavMenu />
            <Category Category={category} ProductData={productData} />
            <Footer />
        </Fragment>
    );
}

export default ProductCategoryPage;
