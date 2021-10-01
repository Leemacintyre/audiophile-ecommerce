import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'

const ProductDisplay = ({ shopData, getShopData }) => {

    useEffect(() => {
        getShopData()
    }, [getShopData])

    shopData && console.log("test", shopData);

    return (shopData &&
        <div>
            {
                <div>
                    {shopData.map((data) => {
                        return (
                            <div key={data._id}>
                                <div>{data.product}</div>
                                <div>{data.items.map((item) => (<div key={item._id}>{item.name}</div>))}</div>
                            </div>
                        )
                    })
                    }
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    shopData: selectShopData(state)
})
const mapDispatchToProps = dispatch => ({
    getShopData: () => dispatch(fetchShopDataStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)