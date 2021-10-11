import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'


import { RiDeleteBin5Line } from 'react-icons/ri';
import { connect } from 'react-redux';
import { fetchCurrentItemId, fetchCurrentTitleId } from '../../redux/shop/shopData.actions';

const DeleteStockItem = ({ deleteItem, shopId, itemId, currentItemId, currentTitleId }) => {

    const history = useHistory();


    const doAll = () => {
        currentItemId(itemId);
        currentTitleId(shopId);
        deleteItem();
    }
    return (
        <span className="productDisplayCard-icon" onClick={doAll} ><RiDeleteBin5Line /></span>
    );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    currentItemId: (currentItemId) => dispatch(fetchCurrentItemId(currentItemId)),
    currentTitleId: (currentTitleId) => dispatch(fetchCurrentTitleId(currentTitleId))

})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStockItem);