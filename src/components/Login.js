import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  userOnAuthStateChange } from '../actions';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    componentDidMount() {
        this.props.userOnAuthStateChange();
    }

    renderLoginForm() {

        if (this.props.isSignedIn)
            return (<Redirect to="/home" />)
        else
          return (<Redirect to="/auth" />);
    }

    render() {
        return this.renderLoginForm();
    }
}
const mapStateToProps = (state) => {
    return { ...state.authUser };
};

export default connect(mapStateToProps, {
    userOnAuthStateChange
})(Login);