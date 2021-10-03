import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'
import ProductDisplayCard from '../ProductDisplayCard/ProductDisplayCard.component'

const ProductDisplay = ({ shopData, getShopData }) => {

    useEffect(() => {
        getShopData()
    }, [getShopData])

    shopData && console.log("ProductDisplay", shopData);

    return (shopData &&
        <div>
            <ProductDisplayCard shopData={shopData} />
            <a href="https://localhost:8000/v1/auth/google">login </a>
            <a href="https://localhost:8000/v1/checklog"> check log </a>
            <a href="https://localhost:8000/v1/logout"> logout</a>
        </div>
    )
}

const mapStateToProps = state => ({
    shopData: selectShopData(state)
})
const mapDispatchToProps = dispatch => ({
    getShopData: () => dispatch(fetchShopDataStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)