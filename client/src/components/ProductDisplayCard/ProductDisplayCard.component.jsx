import React, { useState } from 'react'
import "./ProductDisplayCard.styles.scss"
import { BiAddToQueue } from "react-icons/bi";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";
import { useHistory } from "react-router-dom"
import DeleteStockItem from '../DeleteStockItem/DeleteStockItem.component';
import AddStockItem from "../AddStockItem/AddStockItem.component"

const ProductDisplayCard = ({ shopData, productItems }) => {
    const history = useHistory();

    const [showModal, setShowModal] = useState({ openModal: false, modalId: null })

    const toggleModal = (Id = null) => {
        console.log(showModal, Id)
        const { openModal } = showModal
        setShowModal({ openModal: !openModal, modalId: Id })
        console.log(showModal)
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
                            <div className="productDisplayCard-icon"><RiDeleteBin5Line /></div>
                        </div>
                        <div className="productDisplayCard-item">
                            {
                                productItems.map((item) => {
                                    if (sData._id === item.ProductCategoryId) {
                                        return (
                                            <div className="productDisplayCard-card-container" key={item._id}>
                                                <div className="productDisplayCard-iconContainer">
                                                    <span className="productDisplayCard-icon" onClick={() => history.push(`/product/update/${sData._id}/${item._id}`)}><RiEdit2Line /></span>
                                                    <DeleteStockItem idToDelete={item._id} />
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

export default ProductDisplayCard