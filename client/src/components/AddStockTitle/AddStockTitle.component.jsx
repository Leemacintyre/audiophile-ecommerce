import React, { useState } from 'react';
import './AddStockTitle.styles.scss'
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton.component';
import LabeledInput from '../LabeledInput/LabeledInput.component';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import axios from 'axios';
import { fetchAddNewShopCategoryStart, fetchShopDataStart } from '../../redux/shop/shopData.actions';
import { selectShopData } from '../../redux/shop/shopData.selectors';

const AddStockTitle = ({ currentUserId, getShopData, shopData, addNewProductCategory }) => {
    console.log("currentUserId", currentUserId);
    const initialState = { userId: currentUserId, product: '' }
    const [categoryTitle, setCategoryTitle] = useState({ userId: currentUserId, product: '' })
    const { product } = categoryTitle


    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.post("products/createProduct", {
        //     "userId": currentUserId,
        //     "product": categoryTitle
        // })
        addNewProductCategory(categoryTitle)
        console.log("test", categoryTitle);
        setCategoryTitle(initialState)
        getShopData()
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCategoryTitle({ ...categoryTitle, [name]: value });
    }


    return (
        <div className="addStockContainer" >
            <CustomButton onClick={(e) => handleSubmit(e)} type="submit" >NEW CATEGORY</CustomButton>
            <div className="addStock-input">
                {/* <LabeledInput handleChange={e => handleChange(e)} value={product} /> */}
                <LabeledInput
                    name="product"
                    type="text"
                    value={product}
                    handleChange={handleChange}
                />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state),
    shopData: selectShopData(state),
})

const mapDispatchToProps = (dispatch) => ({
    getShopData: () => dispatch(fetchShopDataStart()),
    addNewProductCategory: (newProduct) => dispatch(fetchAddNewShopCategoryStart(newProduct))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStockTitle);