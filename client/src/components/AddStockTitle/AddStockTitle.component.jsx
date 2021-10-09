import React, { useState } from 'react';
import './AddStockTitle.styles.scss'
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton.component';
import LabeledInput from '../LabeledInput/LabeledInput.component';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
import axios from 'axios';
import { fetchShopDataStart } from '../../redux/shop/shopData.actions';

const AddStockTitle = ({ currentUserId, getShopData }) => {
    console.log("currentUserId", currentUserId);
    const [categoryTitle, setCategoryTitle] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("products/createProduct", {
            "userId": currentUserId,
            "product": categoryTitle
        })
        setCategoryTitle("")
        getShopData()
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setCategoryTitle(value);
    }

    return (
        <div className="addStockContainer" >
            <CustomButton onClick={(e) => handleSubmit(e)} type="submit" >ADD NEW CATEGORY</CustomButton>
            <div className="addStock-input">
                <LabeledInput handleChange={e => handleChange(e)} value={categoryTitle} />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    currentUserId: selectCurrentUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
    getShopData: () => dispatch(fetchShopDataStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStockTitle);