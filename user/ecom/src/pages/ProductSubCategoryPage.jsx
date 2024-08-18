import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import SubCategory from '../components/ProductDetails/SubCategory';

function ProductSubCategoryPage() {
    // Extract category and subcategory from URL parameters
    const { category, subcategory } = useParams();
    const [productData, setProductData] = useState([]);

    // Fetch product data when category or subcategory changes
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
        axios.get(AppURL.ProductListBySubCategory(category, subcategory))
            .then(response => {
                setProductData(response.data); // Update state with fetched data
            })
            .catch(error => {
                console.error("There was an error fetching the product data!", error);
            });
    }, [category, subcategory]); // Dependencies array

    return (
        <React.Fragment>
            <NavMenu />
            <SubCategory Category={category} SubCategory={subcategory} ProductData={productData} />
            <Footer />
        </React.Fragment>
    );
}

export default ProductSubCategoryPage;
