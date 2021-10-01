import React from 'react'



const ProductDisplayCard = ({ shopData }) => {

    return (
        <div>
            {
                <div>
                    {
                        shopData.map((data) => {
                            return (
                                <div key={data._id}>
                                    <div >
                                        <div>{data.product}</div>
                                        <div>{data.items.map((item) => (<div key={item._id}>{item.name}</div>))}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default ProductDisplayCard

