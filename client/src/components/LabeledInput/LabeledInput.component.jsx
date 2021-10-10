import React from 'react';
import './LabeledInput.styles.scss'

const LabeledInput = ({ handleChange, label, type, ...otherProps }) => {
    return (
        <div>
            {label && <label htmlFor="">{label}</label>}
            {
                type === 'textarea' ?
                    <textarea cols="30" rows="10" onChange={handleChange} type={type} {...otherProps}></textarea>
                    :
                    <input className="LabeledInput-input" onChange={handleChange} type={type} {...otherProps} />
            }
        </div>
    );
};

export default LabeledInput;

