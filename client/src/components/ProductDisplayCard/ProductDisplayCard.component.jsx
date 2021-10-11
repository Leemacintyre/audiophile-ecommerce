import React from 'react'
import "./ProductDisplayCard.styles.scss"
import { BiAddToQueue } from "react-icons/bi";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";
import { useHistory } from "react-router-dom"

const ProductDisplayCard = ({ shopData, productItems }) => {
    const history = useHistory();
    // TODO change route name from test
    return (
        <div className="productDisplayCard-container">

            {
                shopData.map((sData) => (
                    <div className="productDisplayCard-category-container" key={sData._id}>
                        <div className="productDisplayCard-title">
                            {sData.product} <span className="productDisplayCard-addIcon"><BiAddToQueue onClick={() => history.push(`/product/new/${sData._id}`)} /></span>
                        </div>
                        <div className="productDisplayCard-item">
                            {
                                productItems.map((item) => {
                                    if (sData._id === item.ProductCategoryId) {
                                        return (
                                            <div className="productDisplayCard-itemName" key={item._id}>
                                                <div className="productDisplayCard-iconContainer">
                                                    <span className="productDisplayCard-icon" onClick={() => history.push(`/product/update/${sData._id}/${item._id}`)}><RiEdit2Line /></span>
                                                    <span className="productDisplayCard-icon" onClick={() => history.push(`/product/delete/${sData._id}/${item._id}`)}><RiDeleteBin5Line /></span>
                                                </div>
                                                <div>{item.itemName}</div>
                                                <div>{item.itemName}</div>
                                                <div>{item.itemName}</div>
                                                <div>{item.itemName}</div>
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