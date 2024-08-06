import React, { Component, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu';
import Register from '../components/Common/Register';

export class RegisterPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const setUser = this.props.setUser;
        const user = this.props.user;
        return (
            <Fragment>
                <NavMenu />
               <Register setUser={setUser} user ={user}  />  
                <Footer />
            </Fragment>
        );
    }
}

export default RegisterPage;
