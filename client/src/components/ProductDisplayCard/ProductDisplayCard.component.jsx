import React from 'react'
import "./ProductDisplayCard.styles.scss"
import { BiAddToQueue } from "react-icons/bi";
import { RiEdit2Line } from "react-icons/ri";

const ProductDisplayCard = ({ shopData, productItems }) => {
    return (
        <div className="productDisplayCard-container">

            {
                shopData.map((shopData) => (
                    <div className="productDisplayCard-title" key={shopData._id}>
                        <div>{shopData.product} <span className="productDisplayCard-addIcon"><BiAddToQueue /></span></div>
                        <div className="productDisplayCard-item" key={shopData._id}>
                            {
                                productItems.map((item) => {
                                    if (shopData._id === item.ProductCategoryId) {
                                        return (
                                            <div className="productDisplayCard-itemName">
                                                <div ><RiEdit2Line /></div>
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