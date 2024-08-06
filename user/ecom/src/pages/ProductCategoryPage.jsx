import React, { Component, Fragment } from 'react';
import AppURL from '../api/AppURL';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Category from '../components/ProductDetails/Category';
import axios from 'axios';
import { useParams } from 'react-router-dom';

class ProductCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Category: props.category,
            ProductData: []
        };
    }

    componentDidMount() {
        window.scroll(0, 0);
        console.log(`Fetching data for category: ${this.state.Category}`);
        axios.get(AppURL.ProductListByCategory(this.state.Category))
            .then(response => {
                console.log('Data fetched:', response.data);
                this.setState({ ProductData: response.data });
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }

    render() {
        console.log('Rendering ProductCategoryPage with data:', this.state.ProductData);
        return (
            <Fragment>
                <NavMenu />
                <Category Category={this.state.Category} ProductData={this.state.ProductData} />
                <Footer />
            </Fragment>
        );
    }
}

function ProductCategoryPageWrapper() {
    const { category } = useParams();
    return <ProductCategoryPage category={category} />;
}

export default ProductCategoryPageWrapper;
