import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton.component'

import { fetchUserStart } from '../../redux/user/user.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './LoginDisplay.styles.scss'

const LoginDisplay = () => {
    return (
        <div className="loginDisplay-container">
            <div className="loginDisplay-googleSignIn">
                {/* <a href="http://localhost:8000/v1/google/auth/google"> */}
                <a href="https://the-dealer-portal.herokuapp.com//v1/google/auth/google">
                    <CustomButton isGoogleSignIn>SignIn With Google</CustomButton>
                </a>
                <CustomButton>Sign In (not working yet)</CustomButton>
            </div>
            {/* 
            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <a href="http://localhost:8000/v1/currentuser"> currentUser</a> */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: (selectCurrentUser(state))
})

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(fetchUserStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginDisplay)
