import React from 'react';

import { RiDeleteBin5Line } from 'react-icons/ri';
// import { connect } from 'react-redux';
// import { fetchCurrentItemIdStart } from '../../redux/productItem/productItem.actions';


const DeleteStockItem = ({ idToDelete, currentItemId, toDelete, }) => {
    // console.log(idToDelete);

    const deleteId = async () => {
        // console.log(idToDelete);
        await toDelete(idToDelete);
    }

    return (
        <RiDeleteBin5Line onClick={deleteId} />
    );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = (dispatch) => ({
//     currentItemId: (currentItemId) => dispatch(fetchCurrentItemIdStart(currentItemId)),
// })

export default DeleteStockItem;