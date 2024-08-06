import React, { Component, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';  
import ForgetPassword from '../components/Common/ForgetPassword';

class ForgetPasswordPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <NavMenu />
                <ForgetPassword />
                <Footer />
            </Fragment>
        );
    }
}

export default ForgetPasswordPage;
