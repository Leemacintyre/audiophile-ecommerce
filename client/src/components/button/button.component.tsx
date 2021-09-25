import React from "react";
import "./button.styles.scss";

interface Props {
    // All other props
    color: string;
    children: any;
    [x: string]: any;
}

export const Button: React.FC<Props> = ({ children, color, ...props }) => {
    return (
        <button className={`button-container ${color}`} {...props}>
            {children}
        </button>
    );
};
