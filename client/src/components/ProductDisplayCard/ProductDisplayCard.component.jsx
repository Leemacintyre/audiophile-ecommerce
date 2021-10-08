import React from 'react'



const ProductDisplayCard = ({ shopData, productItems }) => {
    // if (shopData && productItems) console.log("ProductDisplayCard", shopData, productItems);
    return (
        <div>
            test
            {
                shopData.map(({ _id, product }) => (
                    <div key={_id}> {product}

                        {/* productItems.map((all) => (all.itemName)) */}
                        {productItems.filter(({ ProductCategoryId }) => (console.log(ProductCategoryId === _id)))}

                    </div>))
            }

        </div>
    )
}

export default ProductDisplayCard

{/* {
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
} */}
