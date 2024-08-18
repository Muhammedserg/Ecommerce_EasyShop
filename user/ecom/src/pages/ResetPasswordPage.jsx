import React, { Component, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu'; 
import ResetPassword from '../components/Common/ResetPassword';

class ResetPasswordPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <NavMenu />
                <ResetPassword />
                <Footer />
            </Fragment>
        );
    }
}

export default ResetPasswordPage;
