import React, { useState } from 'react';
import './EditStockItem.styles.scss'

import LabeledInput from '../LabeledInput/LabeledInput.component';
import ModelSm from '../ModalSm/ModelSm.component';
import { GrEdit } from 'react-icons/gr';

import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import { fetchUpdateProductItemStart } from '../../redux/productItem/productItem.actions';


const EditStockItem = ({ currentUserId, currentProductCategoryId, toggleModal, itemTitle, showModal: { openModal, modalId }, currentItemId, updateProductItem, ...props }) => {

    const initialState = { itemName: '', imageUrl: '', price: '', quantity: '', userId: currentUserId, ProductCategoryId: currentProductCategoryId, itemToUpdate: currentItemId }
    const [updateItem, setUpdateItem] = useState({ itemName: '', imageUrl: '', price: '', quantity: '', userId: currentUserId, ProductCategoryId: currentProductCategoryId, itemToUpdate: currentItemId })
    const { itemName, imageUrl, price, quantity } = updateItem

    const handleChange = event => {
        const { value, name } = event.target;
        setUpdateItem({ ...updateItem, [name]: value })
    }

    // event.preventDefault()
    // addNewProductItem(stockItem)
    // console.log(stockItem);
    // setStockItem(initialState)
    // getProductItem()
    // toggleModal()

    const handleSubmit = (event) => {
        event.preventDefault()
        updateProductItem(updateItem)
        console.log(updateItem);
        setUpdateItem(initialState)

        toggleModal()
    }

    return (
        <>
            <GrEdit onClick={() => toggleModal(currentItemId)} />
            {openModal && modalId === currentItemId && <ModelSm
                title={itemTitle}
                handleSubmit={handleSubmit}
                toggleModal={toggleModal}
                currentProductCategoryId={currentItemId}
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
                    label='PRICE (£)'
                    required />
                <LabeledInput
                    name="quantity"
                    type="number"
                    value={quantity}
                    handleChange={handleChange}
                    label='STOCK'
                    required />
            </ModelSm>}

        </>

    );
};

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
    updateProductItem: (newItem) => dispatch(fetchUpdateProductItemStart(newItem)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStockItem);
