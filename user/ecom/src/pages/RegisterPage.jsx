import React, { Component, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu'; 
import Register from '../components/Common/Register';

export class RegisterPage extends Component {

    componentDidMount() {
        
        window.scrollTo(0, 0);
    }

    render() {
        const { setUser, user } = this.props; 

        return (
            <Fragment>
                <NavMenu />
                <Register setUser={setUser} user={user} />
                <Footer />
            </Fragment>
        );
    }
}

export default RegisterPage;
