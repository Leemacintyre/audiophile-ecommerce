import React from 'react'



const ProductDisplayCard = ({ shopData, productItems }) => {
    return (
        <div>
            {
                shopData.map(({ _id, product }) => (
                    <div key={_id}><div>{product}</div>
                        <div>
                            {
                                productItems.map(({ ProductCategoryId, itemName }) => {
                                    if (_id === ProductCategoryId) {
                                        return (<div>{itemName}</div>)
                                    }
                                    return null
                                })
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDisplayCard