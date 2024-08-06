import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct';
import axios from 'axios';

const ProductDetailsPage = () => {
    const { code } = useParams(); // Access the route parameters
    const [ProductData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scroll(0, 0);
        const url = AppURL.ProductDetails(code);
        console.log('Fetching data from: ', url);

        axios.get(url)
            .then(response => {
                console.log('API Response: ', response.data);
                setProductData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('API Error:', error);
                setError(true);
                setIsLoading(false);
            });
    }, [code]);

    if (isLoading) {
        return (
            <Fragment>
                <NavMenu />
                <div className="text-center">
                    <p>Loading...</p>
                </div>
                <Footer />
            </Fragment>
        );
    }

    if (error) {
        return (
            <Fragment>
                <NavMenu />
                <div className="text-center">
                    <p>Failed to load product details. Please try again later.</p>
                </div>
                <Footer />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <NavMenu />
            <ProductDetails data={ProductData} />
            <SuggestedProduct />
            <Footer />
        </Fragment>
    );
}

export default ProductDetailsPage;
