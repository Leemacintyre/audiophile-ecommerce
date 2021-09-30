import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShopDataStart } from '../../redux/shop/shopData.actions'
import { selectShopData } from '../../redux/shop/shopData.selectors'

import { getAllShopData } from '../../Hooks/axiosRequests'


const ProductDisplay = ({ shopData1, getShopData }) => {
    const [shopData, setShopData] = useState(null)
    useEffect(() => {
        getShopData()
    }, [getShopData])

    // useEffect(() => {
    //     (
    //         async () => {
    //             const { data } = await getAllShopData()
    //             setShopData(data)
    //         }
    //     )()
    // }, [])
    console.log(shopData1);

    return shopData && (
        <div>
            <div>{shopData[0].product}</div>
            <img src={shopData[0].items[0].imageUrl} alt="test"></img>
            <div>{shopData1}</div>
            <button onClick={() => getShopData({ test: "test" })}>test button</button>
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