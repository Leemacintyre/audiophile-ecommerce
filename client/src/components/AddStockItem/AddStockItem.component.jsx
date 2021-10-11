import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import CustomButton from '../CustomButton/CustomButton.component';
import LabeledInput from '../LabeledInput/LabeledInput.component';
import './AddStockItem.component.scss'

const AddStockItem = ({ currentUserId, ...props }) => {
    const { match: { params: { currentProductId } } } = props
    const history = useHistory();

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
            "ProductCategoryId": currentProductId,
            "itemName": itemName,
            "imageUrl": imageUrl,
            "price": parseFloat(price)
        })

        setStockItem(initialState)
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

export default connect(mapStateToProps,)(AddStockItem);