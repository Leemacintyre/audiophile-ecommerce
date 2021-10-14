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


const AddStockItem = ({ currentUserId, ProductCategoryId, showModal, toggleModal, currentProductCategoryId, ...props }) => {

    const initialState = { itemName: '', imageUrl: '', price: '' }
    const [stockItem, setStockItem] = useState({ itemName: '', imageUrl: '', price: '' })
    const { imageUrl, itemName, price } = stockItem

    const handleChange = event => {
        const { value, name } = event.target;
        setStockItem({ ...stockItem, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        // axios.post("productItem/createProductItem", {
        //     "userId": currentUserId,
        //     "ProductCategoryId": currentProductCategoryId,
        //     "itemName": itemName,
        //     "imageUrl": imageUrl,
        //     "price": parseFloat(price)
        // })
        console.log(currentProductCategoryId);
        console.log('i am fired');
        setStockItem(initialState)
    }

    return (
        <>
            {showModal ? <ModelSm
                title={'test'}
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
                :
                <BiAddToQueue onClick={toggleModal} />}
        </>

    )
}



// <div className="addStockItem-bg" >
//     <div className="addStockItem-container">
//         <div onClick={() => history.push("/product")} className="addStockItem-close">
//             x</div>
//         <div className="addStockItem-form">
//             <LabeledInput
//                 name="itemName"
//                 type="text"
//                 value={itemName}
//                 handleChange={handleChange}
//                 label='ITEM NAME'
//                 required />
//             <LabeledInput
//                 name="imageUrl"
//                 type="text"
//                 value={imageUrl}
//                 handleChange={handleChange}
//                 label='IMAGE URL'
//                 required />
//             <LabeledInput
//                 name="price"
//                 type="number"
//                 value={price}
//                 handleChange={handleChange}
//                 label='PRICE (£)'
//                 required />
//             <CustomButton type="submit" onClick={e => handleSubmit(e)}>UPDATE</CustomButton>
//         </div>
//     </div>
// </div>
//     );
// };

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state),

})

export default connect(mapStateToProps,)(AddStockItem);
