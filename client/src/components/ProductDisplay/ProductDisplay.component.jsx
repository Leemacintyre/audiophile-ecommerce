import React, { useEffect } from 'react'
import './ProductDisplay.styles.scss'
import { connect } from 'react-redux'
import { fetchProductItemStart } from '../../redux/productItem/productItem.actions'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { fetchUserStart } from '../../redux/user/user.actions'
import { selectCurrentItemId, selectCurrentTitleId, selectShopData } from '../../redux/shop/shopData.selectors'
import { selectProductItem } from '../../redux/productItem/productItem.selectors'
import ProductDisplayCard from '../ProductDisplayCard/ProductDisplayCard.component'
import AddStockTitle from '../AddStockTitle/AddStockTitle.component'
import axios from 'axios'


const ProductDisplay = ({ shopData, getShopData, productItem, getProductItem, currentUser, getCurrentUser, currentItemId, currentTitleId }) => {

    useEffect(() => {
        getProductItem()
        getShopData()
        // getCurrentUser()

    }, [getShopData, getProductItem, getCurrentUser])

    const deleteItem = async () => {
        console.log(currentItemId.currentItemId)
        console.log('itemDeleted');
        const itemToBeDeleted = currentItemId.currentItemId
        console.log(typeof currentItemId.currentItemId);


        axios.delete("productItem/deleteProductItem", {
            data: {
                "itemToDelete": currentItemId.currentItemId
            }
        })


    }

    return (
        shopData && productItem &&
        <div>
            <div className="productDisplay-addStock">
                <AddStockTitle />
            </div>
            <ProductDisplayCard shopData={shopData} productItems={productItem} deleteItem={deleteItem} />
            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <a href="http://localhost:8000/v1/currentuser"> currentUser</a>
            <button onClick={() => console.log("test", currentItemId.currentItemId)}>test</button>
        </div>
    )
}


const mapStateToProps = state => ({
    productItem: selectProductItem(state),
    shopData: selectShopData(state),
    // currentUser: (state) => state,
    currentItemId: selectCurrentItemId(state),
    currentTitleId: selectCurrentTitleId(state),

})
const mapDispatchToProps = dispatch => ({
    getProductItem: () => dispatch(fetchProductItemStart()),
    getShopData: () => dispatch(fetchShopDataStart()),
    getCurrentUser: () => dispatch(fetchUserStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)
