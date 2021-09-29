import React, { useState, useEffect } from 'react'
import { getAllShopData } from '../../Hooks/axiosRequests'

export const ProductDisplay = () => {
    const [shopData, setShopData] = useState(null)

    useEffect(() => {
        (
            async () => {
                const { data } = await getAllShopData()
                setShopData(data)
            }
        )()
    }, [])
    console.log(shopData);

    return shopData && (
        <div>
            <div>{shopData[0].product}</div>
            <img src={shopData[0].items[0].imageUrl} alt="test"></img>
        </div>
    )
}
