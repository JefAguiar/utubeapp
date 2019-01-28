import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: { signInSuccess: () => false }
}

const LoginForm = () => {
    return (
        <Fragment>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3">
                </MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Sign in</strong>
                                </h3>
                            </div>
                            <div className="row my-3 d-flex justify-content-center">

                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()} />
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </Fragment>
    );
};

export default LoginForm;
