import React from 'react';
import './LabeledInput.styles.scss'

const LabeledInput = ({ handleChange, label, type, ...otherProps }) => {
    return (
        <div className="labeledInput-container" >
            {label && <label htmlFor="">{label}</label>}
            {
                type === 'textarea' ?
                    <textarea cols="30" rows="10" onChange={handleChange} type={type} {...otherProps}></textarea>
                    :
                    <input className="labeledInput-input" onChange={handleChange} type={type} {...otherProps} />
            }
        </div>
    );
};

export default LabeledInput;

