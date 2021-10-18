import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import CustomButton from '../CustomButton/CustomButton.component';
import LabeledInput from '../LabeledInput/LabeledInput.component';
import './AddStockItem.component.scss'
import ModelSm from '../ModalSm/ModelSm.component';

import { BiAddToQueue } from "react-icons/bi";


const AddStockItem = ({ currentUserId, showModal: { openModal, modalId }, toggleModal, currentProductCategoryId, categoryTitle, ...props }) => {

    const initialState = { itemName: '', imageUrl: '', price: '' }
    const [stockItem, setStockItem] = useState({ itemName: '', imageUrl: '', price: '' })
    const { imageUrl, itemName, price } = stockItem

    const handleChange = event => {
        const { value, name } = event.target;
        setStockItem({ ...stockItem, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("productItem/createProductItem", {
            "userId": currentUserId,
            "ProductCategoryId": currentProductCategoryId,
            "itemName": itemName,
            "imageUrl": imageUrl,
            "price": parseFloat(price)
        })
        setStockItem(initialState)
        toggleModal()
    }


    return (
        <>
            <BiAddToQueue onClick={() => toggleModal(currentProductCategoryId)} />

            {openModal && modalId === currentProductCategoryId && <ModelSm
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
                    label='PRICE (£)'
                    required />
            </ModelSm>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state),

})

export default connect(mapStateToProps,)(AddStockItem);
