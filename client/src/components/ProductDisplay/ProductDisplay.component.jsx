import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProductItemStart } from '../../redux/productItem/productItem.actions'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'
import { selectProductItem } from '../../redux/productItem/productItem.selectors'


const ProductDisplay = ({ shopData, getShopData, productItem, getProductItem }) => {

    useEffect(() => {
        getProductItem()
        getShopData()
    }, [getShopData, getProductItem])

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
    shopData: selectShopData(state),
    productItem: selectProductItem(state)

})
const mapDispatchToProps = dispatch => ({
    getProductItem: () => dispatch(fetchProductItemStart()),
    getShopData: () => dispatch(fetchShopDataStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)
