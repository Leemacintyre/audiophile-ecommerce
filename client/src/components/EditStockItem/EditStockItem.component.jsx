import React, { useState } from 'react';
import './EditStockItem.styles.scss'
import LabeledInput from '../LabeledInput/LabeledInput.component';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import CustomButton from '../CustomButton/CustomButton.component';
import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';


const EditStockItem = ({ currentUserId, ...props }) => {
    const { match: { params: { currentItemId, currentProductId } } } = props
    console.log(currentItemId, currentProductId);
    const history = useHistory();

    const initialState = { itemName: '', imageUrl: '', price: '' }
    const [updateItem, setUpdateItem] = useState(initialState)
    const { itemName, imageUrl, price } = updateItem

    const handleChange = event => {
        const { value, name } = event.target;
        setUpdateItem({ ...updateItem, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.put("productItem/updateProductItem", {
            "itemToUpdate": currentItemId,
            "userId": currentUserId,
            "ProductCategoryId": currentProductId,
            "itemName": itemName,
            "imageUrl": imageUrl,
            "price": parseFloat(price)
        })

        setUpdateItem(initialState)
        history.push('/product')
    }

    return (
        <div className="addStockItem-bg" >
            <div className="addStockItem-container">
                <div onClick={() => history.push("/product")} className="addStockItem-close">
                    x</div>
                <div className="addStockItem-form">
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
                    <CustomButton type="submit" onClick={e => handleSubmit(e)}>UPDATE</CustomButton>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state)
})

export default connect(mapStateToProps)(EditStockItem);