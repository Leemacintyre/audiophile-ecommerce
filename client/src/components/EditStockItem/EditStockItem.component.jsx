import React, { useState } from 'react';
import './EditStockItem.styles.scss'

import LabeledInput from '../LabeledInput/LabeledInput.component';
import ModelSm from '../ModalSm/ModelSm.component';
import { GrEdit } from 'react-icons/gr';

import axios from 'axios';
import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';


const EditStockItem = ({ currentUserId, currentProductCategoryId, toggleModal, itemTitle, showModal: { openModal, modalId }, currentItemId, ...props }) => {


    const initialState = { itemName: '', imageUrl: '', price: '' }
    const [updateItem, setUpdateItem] = useState(initialState)
    const { itemName, imageUrl, price } = updateItem

    const handleChange = event => {
        const { value, name } = event.target;
        setUpdateItem({ ...updateItem, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted');
        axios.put("productItem/updateProductItem", {
            "itemToUpdate": currentItemId,
            "userId": currentUserId,
            "ProductCategoryId": currentProductCategoryId,
            "itemName": itemName,
            "imageUrl": imageUrl,
            "price": parseFloat(price)
        })
        console.log(itemName, imageUrl, price);
        setUpdateItem(initialState)
        toggleModal()
    }

    return (
        <>
            <GrEdit onClick={() => toggleModal(currentItemId)} />
            {openModal && modalId === currentItemId &&
                <ModelSm currentProductCategoryId={currentItemId} handleSubmit={handleSubmit} toggleModal={toggleModal} title={itemTitle} >
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
                </ModelSm>}

        </>

    );
};

// <div className="addStockItem-bg" >
//     <div className="addStockItem-container">
//         {/* <div onClick={() => history.push("/product")} className="addStockItem-close"> */}
//         x</div>
//     <div className="addStockItem-form">
//         <LabeledInput
//             name="itemName"
//             type="text"
//             value={itemName}
//             handleChange={handleChange}
//             label='ITEM NAME'
//             required />
//         <LabeledInput
//             name="imageUrl"
//             type="text"
//             value={imageUrl}
//             handleChange={handleChange}
//             label='IMAGE URL'
//             required />
//         <LabeledInput
//             name="price"
//             type="number"
//             value={price}
//             handleChange={handleChange}
//             label='PRICE (£)'
//             required />
//         <CustomButton type="submit" onClick={e => handleSubmit(e)}>UPDATE</CustomButton>
//     </div>
// </div>
// </div >
const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state)
})

export default connect(mapStateToProps)(EditStockItem);