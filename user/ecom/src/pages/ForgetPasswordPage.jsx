import React, { useEffect, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';  
import ForgetPassword from '../components/Common/ForgetPassword';

const ForgetPasswordPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <NavMenu />
            <ForgetPassword />
            <Footer />
        </Fragment>
    );
}

export default ForgetPasswordPage;
