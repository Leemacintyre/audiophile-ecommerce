import React from 'react'
import './NavBar.styles.scss'
import { Link, Redirect } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const NavBar = ({ currentUser }) => {
    return (
        <>
            {!currentUser && <Redirect to='/login' />}
            <div className="navBar-container">
                <Link to={'/'}  ><LogoIcon className="navBar-logo" /></Link>
                <div className="navBar-nav">
                    {currentUser ? <Link to={'/test'} className="navBar-link">TEST</Link> : <Link to={'/login'} className="navBar-link">TEST</Link>}
                    {currentUser ? <Link to={'/product'} className="navBar-link">STOCK</Link> : <Link to={'/login'} className="navBar-link">STOCK</Link>}
                    {currentUser ? <a href="https://the-dealer-portal.herokuapp.com/v1/google/logout" className="NavBar-link">LOGOUT</a> : null}
                    {/* {currentUser ? <a href="http://localhost:8000/v1/google/logout" className="NavBar-link">LOGOUT</a> : null} */}
                </div>
            </div>
        </>

    )
}
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)