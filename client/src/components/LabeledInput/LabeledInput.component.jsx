import React from 'react';
import './LabeledInput.styles.scss'

const LabeledInput = ({ handleChange, label, type, value }) => {
    return (
        <div>
            {label && <label htmlFor="">{label}</label>}
            {
                type === 'textarea' ?
                    <textarea cols="30" rows="10" onChange={handleChange} type={type} value={value}></textarea>
                    :
                    <input className="LabeledInput-input" onChange={handleChange} value={value} type={type} />
            }
        </div>
    );
};

export default LabeledInput;

