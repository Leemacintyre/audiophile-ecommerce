import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStart } from '../../redux/user/user.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const HomePage = ({ currentUser, getCurrentUser }) => {
    useEffect(() => {
        getCurrentUser()
    }, [getCurrentUser])

    return (
        <div>
            <h1>HOMEPAGE</h1>

            <button onClick={() => currentUser()}>test here</button> <br />
            <button >test here</button> <br />

            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <br />
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <br />
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <br />
            <a href="http://localhost:8000/v1/currentuser"> currentUser</a>
        </div>
    )
}



const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(fetchUserStart()),
})



export default connect(mapStateToProps, mapDispatchToProps)(HomePage)