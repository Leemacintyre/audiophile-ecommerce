import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProductItemStart } from '../../redux/productItem/productItem.actions'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { fetchUserStart } from '../../redux/user/user.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'
import { selectProductItem } from '../../redux/productItem/productItem.selectors'


const ProductDisplay = ({ shopData, getShopData, productItem, getProductItem, currentUser, getCurrentUser }) => {

    useEffect(() => {
        getProductItem()
        getShopData()
        getCurrentUser()
    }, [getShopData, getProductItem, getCurrentUser])

    shopData && console.log("ProductDisplay", shopData, productItem);

    return (
        // shopData &&
        <div>
            {/* <ProductDisplayCard shopData={shopData} /> */}
            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <div>test</div>
        </div>
    )
}

const mapStateToProps = state => ({
    productItem: selectProductItem(state),
    shopData: selectShopData(state),
    currentUser: (state) => state

})
const mapDispatchToProps = dispatch => ({
    getProductItem: () => dispatch(fetchProductItemStart()),
    getShopData: () => dispatch(fetchShopDataStart()),
    getCurrentUser: () => dispatch(fetchUserStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)
