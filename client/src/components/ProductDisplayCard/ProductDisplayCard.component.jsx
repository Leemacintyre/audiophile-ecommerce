import React, { useState } from 'react'
import "./ProductDisplayCard.styles.scss"
import { connect } from 'react-redux';
import DeleteStockItem from '../DeleteStockItem/DeleteStockItem.component';
import AddStockItem from "../AddStockItem/AddStockItem.component"
import EditStockItemComponent from '../EditStockItem/EditStockItem.component';
import { fetchDeleteProductCategoryStart } from '../../redux/shop/shopData.actions';
import { fetchCurrentItemIdStart } from '../../redux/productItem/productItem.actions';

const ProductDisplayCard = ({ shopData, productItems, deleteCategory, deleteItem }) => {

    const [showModal, setShowModal] = useState({ openModal: false, modalId: null })

    const toggleModal = (Id = null) => {
        // console.log(showModal, Id)
        const { openModal } = showModal
        setShowModal({ openModal: !openModal, modalId: Id })
        // console.log(showModal)
    }


    return (
        <div className="productDisplayCard-container">

            {
                shopData.map((sData) => (
                    <div className="productDisplayCard-category-container" key={sData._id}>
                        <div className="productDisplayCard-title">
                            <div className="productDisplayCard-titleItemContainer">
                                <div className="productDisplayCard-titleText">{sData.product}</div>
                                <div className="productDisplayCard-icon">
                                    <AddStockItem toggleModal={toggleModal} currentProductCategoryId={sData._id} categoryTitle={sData.product} showModal={showModal} />
                                    {/* <BiAddToQueue onClick={() => history.push(`/product/new/${sData._id}`)} /> */}
                                </div>
                            </div>
                            <div className="productDisplayCard-icon">
                                <DeleteStockItem toDelete={deleteItem} idToDelete={sData._id} />
                            </div>
                        </div>
                        <div className="productDisplayCard-item">
                            {
                                productItems.map((item) => {
                                    if (sData._id === item.ProductCategoryId) {
                                        return (
                                            <div className="productDisplayCard-card-container" key={item._id}>
                                                <div className="productDisplayCard-iconContainer">
                                                    {/* <span className="productDisplayCard-icon" onClick={() => history.push(`/product/update/${sData._id}/${item._id}`)}><RiEdit2Line /></span> */}
                                                    <div className="productDisplayCard-icon">
                                                        <EditStockItemComponent toggleModal={toggleModal} currentProductCategoryId={sData._id} itemTitle={item.itemName} currentItemId={item._id} showModal={showModal} />
                                                    </div>
                                                    <div className="productDisplayCard-icon">
                                                        <DeleteStockItem toDelete={deleteCategory} idToDelete={item._id} />
                                                    </div>
                                                </div>
                                                <img className="productDisplayCard-image" src={item.imageUrl} alt="" />
                                                <div className="productDisplayCard-itemName">{item.itemName}</div>
                                                <div className="productDisplayCard-price">Cost per unit:<strong> £{item.price}</strong></div>
                                                <div className="productDisplayCard-quantity">Stock level:<strong> 14</strong> </div>
                                            </div>
                                        )
                                    }
                                    return null
                                })
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (currentItemId) => dispatch(fetchCurrentItemIdStart(currentItemId)),
    deleteCategory: (categoryId) => dispatch(fetchDeleteProductCategoryStart(categoryId))
})

export default connect(null, mapDispatchToProps)(ProductDisplayCard)