import React from "react";
import { Hamburger } from "../hamburger/hamburger.component";
import { ShoppingCart } from "../shoppingCart/shoppingCart.component";

import "./header.styles.scss";

export default function Header() {
    return (
        <div className="containerHeader">
            <div>
                <Hamburger />
            </div>
            <div>audiophile</div>
            <div>
                <ShoppingCart />
            </div>
        </div>
    );
}
