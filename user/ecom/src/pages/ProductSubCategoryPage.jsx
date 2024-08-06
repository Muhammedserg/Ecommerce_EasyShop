import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import SubCategory from '../components/ProductDetails/SubCategory';

function ProductSubCategoryPage() {
    const { category, subcategory } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        axios.get(AppURL.ProductListBySubCategory(category, subcategory))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            });
    }, [category, subcategory]);

    return (
        <React.Fragment>
            <NavMenu />
            <SubCategory Category={category} SubCategory={subcategory} ProductData={productData} />
            <Footer />
        </React.Fragment>
    );
}

export default ProductSubCategoryPage;
