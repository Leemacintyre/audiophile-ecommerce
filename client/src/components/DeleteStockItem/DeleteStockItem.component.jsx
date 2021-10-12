import React from 'react';

import { RiDeleteBin5Line } from 'react-icons/ri';
import { connect } from 'react-redux';
import { fetchCurrentItemIdStart } from '../../redux/productItem/productItem.actions';


const DeleteStockItem = ({ idToDelete, currentItemId }) => {

    const deleteId = async () => {
        console.log(idToDelete);
        await currentItemId(idToDelete);
    }

    return (
        <span className="productDisplayCard-icon" onClick={deleteId} ><RiDeleteBin5Line /></span>
    );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    currentItemId: (currentItemId) => dispatch(fetchCurrentItemIdStart(currentItemId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStockItem);