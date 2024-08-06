import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuData: [],
            loading: true,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    componentDidMount() {
        this.fetchMenuData();
    }

    fetchMenuData() {
        axios.get(AppURL.AllCategoryDetails)
            .then(response => {
                console.log("API response data:", response.data);
                this.setState({ MenuData: response.data, loading: false });
            })
            .catch(error => {
                console.error("There was an error fetching the menu data!", error);
                this.setState({ loading: false });
            });
    }

    toggleDropdown(index) {
        const { MenuData } = this.state;
        const updatedData = MenuData.map((item, i) => {
            if (i === index) {
                item.active = !item.active;
            } else {
                item.active = false;
            }
            return item;
        });
        this.setState({ MenuData: updatedData });
    }

    render() {
        const { MenuData, loading } = this.state;
        console.log("MegaMenu state MenuData:", MenuData);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!Array.isArray(MenuData) || MenuData.length === 0) {
            return <div>No menu data available.</div>;
        }

        const MyView = MenuData.map((CatList, i) => (
            <div key={i.toString()} className="dropdown">
                <button
                    className={`dropbtn ${CatList.active ? 'active' : ''}`}
                    onClick={() => this.toggleDropdown(i)}
                >
                    <img
                        className="accordionMenuIcon"
                        src={CatList.category_image}
                        alt="Menu Icon"
                    />
                    <span>{CatList.category_name.trim()}</span>
                    <span className={`arrow ${CatList.active ? 'open' : ''}`}>&#9660;</span>
                </button>
                <div className={`dropdown-content ${CatList.active ? 'show' : ''}`}>
                    {CatList.subcategory_name && CatList.subcategory_name.length > 0 ? (
                        CatList.subcategory_name.map((SubList, j) => (
                            <li key={j.toString()} className="subcategory-item">
                                <Link to={`/productsubcategory/${CatList.category_name}/${SubList.subcategory_name}`} className="subcategory-link">
                                    {SubList.subcategory_name}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <div className="subcategory-item">
                            <span className="no-subcategories">No subcategories available</span>
                        </div>
                    )}
                </div>
            </div>
        ));

        return (
            <div className="menu-container">
                {MyView}
            </div>
        );
    }
}

export default MegaMenu;
