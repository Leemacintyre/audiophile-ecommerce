import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import LabeledInput from '../LabeledInput/LabeledInput.component';
import './AddStockItem.component.scss'
import ModalSm from '../ModalSm/ModalSm.component';

import { BiAddToQueue } from "react-icons/bi";
import { fetchAddNewProductItemStart } from '../../redux/productItem/productItem.actions';


const AddStockItem = ({ currentUserId, showModal: { openModal, modalId }, toggleModal, currentProductCategoryId, categoryTitle, addNewProductItem, ...props }) => {

    const initialState = { itemName: '', imageUrl: '', price: '', quantity: '', userId: currentUserId, ProductCategoryId: currentProductCategoryId }
    const [stockItem, setStockItem] = useState({ itemName: '', imageUrl: '', price: '', quantity: '', userId: currentUserId, ProductCategoryId: currentProductCategoryId })
    const { imageUrl, itemName, price, quantity } = stockItem

    const handleChange = event => {
        const { value, name } = event.target;
        setStockItem({ ...stockItem, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        addNewProductItem(stockItem)
        console.log("stockItems", stockItem);
        setStockItem(initialState)
        toggleModal()

    }

    return (
        <>
            <BiAddToQueue onClick={() => toggleModal(currentProductCategoryId)} />

            {openModal && modalId === currentProductCategoryId && <ModalSm
                title={categoryTitle}
                handleSubmit={handleSubmit}
                toggleModal={toggleModal}
                currentProductCategoryId={currentProductCategoryId}
            >
                <LabeledInput
                    name="itemName"
                    type="text"
                    value={itemName}
                    handleChange={handleChange}
                    label='ITEM NAME'
                    required />
                <LabeledInput
                    name="imageUrl"
                    type="text"
                    value={imageUrl}
                    handleChange={handleChange}
                    label='IMAGE URL'
                    required />
                <LabeledInput
                    name="price"
                    type="number"
                    value={price}
                    handleChange={handleChange}
                    label='PRICE (??)'
                    required />
                <LabeledInput
                    name="quantity"
                    type="number"
                    value={quantity}
                    handleChange={handleChange}
                    label='STOCK'
                    required />
            </ModalSm>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state),

})

const mapDispatchToProps = dispatch => ({
    addNewProductItem: (newItem) => dispatch(fetchAddNewProductItemStart(newItem)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStockItem);
