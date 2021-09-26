import React, { useState } from "react";
import "./hamburger.styles.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const Hamburger = (): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const handleActive = () => {
        setActive(!active);
    };

    return (
        <div className="hamburger" onClick={handleActive}>
            {!active ? <GiHamburgerMenu /> : <ImCross />}
        </div>
    );
};
