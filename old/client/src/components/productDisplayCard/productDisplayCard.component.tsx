import React from "react";

import "./productDisplayCard.styles.scss";

export const ProductDisplayCard = ({ image }: any) => {
    // const {
    //     section2: { mobile },
    // }: asset = HOME_DATA;
    // console.log(mobile.image1.default);
    // console.log(HOME_DATA);

    return (
        <div className="productDisplayCard">
            <div className="productDisplayCard-content">
                <img src={image} alt="" />
                <div className="productDisplayCard-background" />
                <div className="productDisplayCard-title">headphones</div>
                <div className="productDisplayCard-shop">
                    shop <span> &gt; </span>
                </div>
            </div>
        </div>
    );
};
