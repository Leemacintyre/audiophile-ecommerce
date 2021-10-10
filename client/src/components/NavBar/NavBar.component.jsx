import React from 'react'
import './NavBar.styles.scss'
import { Link, Redirect } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// TODO: cart will need its own component WITH ICON

const NavBar = ({ currentUser }) => {
    return (
        <>
            {!currentUser && <Redirect to='/login' />}
            <div className="NavBar-container">
                <Link to={'/'} className="NavBar-logo"><LogoIcon /></Link>
                <div className="NavBar-nav">
                    {currentUser ? <Link to={'/test'} className="NavBar-link">TEST</Link> : <Link to={'/login'} className="NavBar-link">TEST</Link>}
                    {currentUser ? <Link to={'/product'} className="NavBar-link">STOCK</Link> : <Link to={'/login'} className="NavBar-link">STOCK</Link>}
                    {currentUser ? <a href="http://localhost:8000/v1/google/logout" className="NavBar-link">LOGOUT</a> : null}
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