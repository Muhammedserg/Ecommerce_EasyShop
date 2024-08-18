import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const MegaMenu = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = () => {
        axios.get(AppURL.AllCategoryDetails)
            .then(response => {
                console.log("API response data:", response.data);
                setMenuData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the menu data!", error);
                setLoading(false);
            });
    };

    const toggleDropdown = (index) => {
        const updatedData = menuData.map((item, i) => {
            if (i === index) {
                item.active = !item.active;
            } else {
                item.active = false;
            }
            return item;
        });
        setMenuData([...updatedData]);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(menuData) || menuData.length === 0) {
        return <div>No menu data available.</div>;
    }

    const MyView = menuData.map((catList, i) => (
        <div key={i.toString()} className="dropdown">
            <button
                className={`dropbtn ${catList.active ? 'active' : ''}`}
                onClick={() => toggleDropdown(i)}
            >
                <img
                    className="accordionMenuIcon"
                    src={catList.category_image}
                    alt="Menu Icon"
                />
                <span>{catList.category_name.trim()}</span>
                <span className={`arrow ${catList.active ? 'open' : ''}`}>&#9660;</span>
            </button>
            <div className={`dropdown-content ${catList.active ? 'show' : ''}`}>
                {catList.subcategory_name && catList.subcategory_name.length > 0 ? (
                    catList.subcategory_name.map((subList, j) => (
                        <li key={j.toString()} className="subcategory-item">
                            <Link to={`/productsubcategory/${catList.category_name}/${subList.subcategory_name}`} className="subcategory-link">
                                {subList.subcategory_name}
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
};

export default MegaMenu;
