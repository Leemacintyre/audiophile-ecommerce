import React from "react";
import { ProductDisplayCard } from "../../components/productDisplayCard/productDisplayCard.component";
import { HOME_DATA } from "../../assets/data";

export const ProductDisplay = () => {
    interface asset {
        section2: {
            mobile?:
                | {
                      image1: typeof import("*.png");
                      image2: typeof import("*.png");
                      image3: typeof import("*.png");
                  }
                | any;
        };
    }

    const {
        section2: { mobile },
    }: asset = HOME_DATA;
    // console.log(mobile.image1.default);
    console.log(mobile);
    console.log(Object.keys(mobile));
    return (
        <div>
            <ProductDisplayCard image={mobile.image1.default} />;
        </div>
    );
};
