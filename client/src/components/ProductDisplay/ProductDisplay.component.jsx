import React, { useEffect, useState } from 'react'
import './ProductDisplay.styles.scss'
import { connect } from 'react-redux'
import { fetchProductItemStart } from '../../redux/productItem/productItem.actions'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { fetchUserStart } from '../../redux/user/user.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'
import { selectProductItem } from '../../redux/productItem/productItem.selectors'
import ProductDisplayCard from '../ProductDisplayCard/ProductDisplayCard.component'
import AddStockTitle from '../AddStockTitle/AddStockTitle.component'


const ProductDisplay = ({ shopData, getShopData, productItem, getProductItem, getCurrentUser }) => {

    useEffect(() => {
        getProductItem()
        getShopData()

    }, [getShopData, getProductItem, getCurrentUser])

    return (
        shopData && productItem &&
        <div>
            <div className="productDisplay-addStock">
                <AddStockTitle />
            </div>
            <ProductDisplayCard shopData={shopData} productItems={productItem} />
            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <a href="http://localhost:8000/v1/currentuser"> currentUser</a>
        </div>
    )
}


const mapStateToProps = state => ({
    productItem: selectProductItem(state),
    shopData: selectShopData(state),

})
const mapDispatchToProps = dispatch => ({
    getProductItem: () => dispatch(fetchProductItemStart()),
    getShopData: () => dispatch(fetchShopDataStart()),
    getCurrentUser: () => dispatch(fetchUserStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)
