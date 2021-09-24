import React from "react";
import "./button.styles.scss";

interface Props {
    // All other props
    [x: string]: any;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <button className="button-container" {...props}>
            {children}
        </button>
    );
};
