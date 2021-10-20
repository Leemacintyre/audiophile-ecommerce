import React from 'react';

import { RiDeleteBin5Line } from 'react-icons/ri';


const DeleteStockItem = ({ idToDelete, toDelete, }) => {

    const deleteId = async () => {
        // console.log(idToDelete);
        toDelete(idToDelete);
    }

    return (
        <RiDeleteBin5Line onClick={deleteId} />
    );
};


export default DeleteStockItem;