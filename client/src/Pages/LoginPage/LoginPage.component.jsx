import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import './LoginPage.styles.scss'
import LoginDisplay from '../../components/LoginDisplay/LoginDisplay.component'
import { fetchUserStart } from '../../redux/user/user.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const LoginPage = ({ getCurrentUser, currentUser }) => {
    useEffect(() => {
        getCurrentUser()
    }, [getCurrentUser])

    return (
        <>
            {currentUser && <Redirect to='/' />}
            <div className="loginPage-container">
                <LoginDisplay />
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    currentUser: (selectCurrentUser(state))
})

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(fetchUserStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)