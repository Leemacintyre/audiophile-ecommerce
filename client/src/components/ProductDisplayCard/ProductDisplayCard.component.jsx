import React from 'react'
import "./ProductDisplayCard.styles.scss"
import { BiAddToQueue } from "react-icons/bi";
import { RiEdit2Line } from "react-icons/ri";
import { useHistory } from "react-router-dom"
import DeleteStockItem from '../DeleteStockItem/DeleteStockItem.component';

const ProductDisplayCard = ({ shopData, productItems, deleteItem }) => {
    const history = useHistory();
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
                                                    <DeleteStockItem deleteItem={deleteItem} shopId={sData._id} itemId={item._id} />
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